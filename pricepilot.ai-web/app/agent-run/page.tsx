'use client';

import { JSX, useCallback, useEffect, useState } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCircle,
  TrendingUp,
  Activity,
  RotateCcw,
  Package,
  Mail,
  Instagram,
  Globe,
  Play,
  Pause,
} from 'lucide-react';

import type {
  AgentLog,
  GlobalMetrics,
  LogType,
  Product,
  SelectedProduct,
  Urgency,
} from '@/app/agent-run/types';
import {
  INITIAL_PRODUCTS,
  MAX_DAYS,
  SIMULATION_PLAN,
} from '@/app/agent-run/data';

export default function AgentRunPage(): JSX.Element {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed] = useState<number>(1000);
  const [selectedProduct, setSelectedProduct] =
    useState<SelectedProduct>('all');

  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [agentLogs, setAgentLogs] = useState<AgentLog[]>([]);
  const [globalMetrics, setGlobalMetrics] = useState<GlobalMetrics>({
    totalInventoryValue: 19640,
    projectedProfit: 0,
    productsActioned: 0,
    avgSellThrough: 0,
    totalHoldingCostSaved: 0,
  });

  const executeDay = useCallback((day: number): void => {
    setCurrentDay(day);

    if (day >= MAX_DAYS) {
      setIsPlaying(false);
    }

    const dayActions = SIMULATION_PLAN[day] ?? [];

    dayActions.forEach((action, index) => {
      setTimeout(() => {
        // Add to logs
        setAgentLogs((prev) => [
          ...prev,
          {
            day,
            time: `Day ${day}, ${9 + index}:00 AM`,
            productId: action.productId,
            message: action.message,
            type: action.type ?? 'info',
          },
        ]);

        if (action.productId !== 'all') {
          setProducts((prev) =>
            prev.map((product) => {
              if (product.id === action.productId) {
                const updatedProduct: Product = {
                  ...product,
                  agentFocus: true,
                };
                // Apply discount
                if (typeof action.discount === 'number') {
                  updatedProduct.currentDiscount = action.discount;
                  updatedProduct.currentPrice =
                    (product.basePrice * (100 - action.discount)) / 100;
                  updatedProduct.status = 'markdown_active';
                }

                // Update channels
                if (action.channels && action.channels.length > 0) {
                  updatedProduct.activeChannels = action.channels;
                }

                // Simulate sales based on actions
                if (
                  action.action === 'APPLY_MARKDOWN' ||
                  action.action === 'INCREASE_MARKDOWN'
                ) {
                  const boostFactor = 1 + (action.discount ?? 0) / 20;
                  const dailySales = Math.floor(
                    product.salesVelocity * boostFactor,
                  );
                  const newStock = Math.max(
                    0,
                    product.currentStock - dailySales,
                  );
                  const soldUnits = product.initialStock - newStock;

                  updatedProduct.currentStock = newStock;
                  updatedProduct.soldUnits = soldUnits;
                  updatedProduct.currentSellThrough =
                    (soldUnits / product.initialStock) * 100;
                  updatedProduct.totalRevenue =
                    product.totalRevenue +
                    dailySales * updatedProduct.currentPrice;
                }

                // Clear focus after a moment
                setTimeout(() => {
                  setProducts((innerPrev) =>
                    innerPrev.map((p) =>
                      p.id === action.productId
                        ? ({ ...p, agentFocus: false } as Product)
                        : p,
                    ),
                  );
                }, 500);

                return updatedProduct;
              }

              // Natural sales for other products
              const naturalSales = Math.floor(
                product.salesVelocity * (product.currentDiscount ? 1.5 : 1),
              );
              const newStock = Math.max(0, product.currentStock - naturalSales);
              const soldUnits = product.initialStock - newStock;
              return {
                ...product,
                currentStock: newStock,
                soldUnits,
                currentSellThrough: (soldUnits / product.initialStock) * 100,
              };
            }),
          );
        }

        // Update global metrics
        setGlobalMetrics((prev) => ({
          ...prev,
          projectedProfit: Math.min(2156, prev.projectedProfit + day * 308),
          productsActioned:
            action.action === 'APPLY_MARKDOWN'
              ? prev.productsActioned + 1
              : prev.productsActioned,
          avgSellThrough: day * 10 + 15,
          totalHoldingCostSaved: day * 171,
        }));
      }, index * 200);
    });
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    if (currentDay >= MAX_DAYS) return;

    const timer = setTimeout(() => {
      executeDay(currentDay + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isPlaying, currentDay, speed, executeDay]);

  const resetSimulation = (): void => {
    setCurrentDay(0);
    setIsPlaying(false);
    setSelectedProduct('all');
    setAgentLogs([]);
    setProducts(
      INITIAL_PRODUCTS.map((p) => ({
        ...p,
        currentStock: p.initialStock,
        soldUnits: 0,
        currentPrice: p.basePrice,
        currentDiscount: 0,
        currentSellThrough: 0,
        status: 'monitoring',
        activeChannels: [],
        totalRevenue: 0,
        agentFocus: false,
      })),
    );
    setGlobalMetrics({
      totalInventoryValue: 19640,
      projectedProfit: 0,
      productsActioned: 0,
      avgSellThrough: 0,
      totalHoldingCostSaved: 0,
    });
  };

  const getStatusColor = (urgency: Urgency): string => {
    switch (urgency) {
      case 'URGENT':
        return 'text-red-600 bg-red-50';
      case 'MODERATE':
        return 'text-yellow-600 bg-yellow-50';
      case 'ON TRACK':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getLogIcon = (type: LogType): JSX.Element => {
    switch (type) {
      case 'urgent':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'action':
        return <TrendingUp className="w-4 h-4 text-blue-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'channel':
        return <Bell className="w-4 h-4 text-purple-500" />;
      case 'analysis':
        return <Activity className="w-4 h-4 text-gray-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🤖 Autonomous Agent Simulation
          </h1>
          <p className="text-gray-600">
            Watch the AI agent manage multiple products simultaneously over 7
            days
          </p>
        </div>

        {/* Control Panel */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={currentDay >= MAX_DAYS}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
                <span>{isPlaying ? 'Pause' : 'Start'}</span>
              </button>

              <button
                onClick={resetSimulation}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>

              {/*<div className="flex items-center space-x-2">
                <FastForward className="w-5 h-5 text-gray-600" />
                <select
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="px-3 py-1 border rounded-md"
                >
                  <option value={2000}>Slow</option>
                  <option value={1000}>Normal</option>
                  <option value={500}>Fast</option>
                </select>
              </div>*/}
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-sm text-gray-600">Simulation Day</div>
                <div className="text-2xl font-bold">{currentDay} / 7</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Profit Recovered</div>
                <div className="text-2xl font-bold text-green-600">
                  ${globalMetrics.projectedProfit.toFixed(0)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentDay / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Product Status Grid */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Product Inventory Status
            </h2>

            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-md p-4 transition-all duration-300 ${
                  product.agentFocus ? 'ring-2 ring-blue-500 scale-102' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.urgency)}`}
                      >
                        {product.urgency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {product.sku} • {product.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Days Left</div>
                    <div
                      className={`text-xl font-bold ${product.daysLeft <= 7 ? 'text-red-600' : 'text-gray-700'}`}
                    >
                      {product.daysLeft}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-3">
                  <div>
                    <div className="text-xs text-gray-600">Stock</div>
                    <div className="font-semibold">
                      {product.currentStock}/{product.initialStock}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Price</div>
                    <div className="font-semibold">
                      ${product.currentPrice.toFixed(2)}
                      {product.currentDiscount > 0 && (
                        <span className="text-red-600 text-xs ml-1">
                          -{product.currentDiscount}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Sold</div>
                    <div className="font-semibold text-green-600">
                      {product.soldUnits}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Clear%</div>
                    <div className="font-semibold">
                      {product.currentSellThrough.toFixed(0)}%
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        product.currentSellThrough >= product.targetSellThrough
                          ? 'bg-green-500'
                          : product.currentSellThrough >=
                              product.targetSellThrough * 0.5
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                      }`}
                      style={{
                        width: `${Math.min(100, product.currentSellThrough)}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">0%</span>
                    <span className="text-xs text-gray-700">
                      Target: {product.targetSellThrough}%
                    </span>
                    <span className="text-xs text-gray-500">100%</span>
                  </div>
                </div>

                {/* Active Channels */}
                {product.activeChannels.length > 0 && (
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs text-gray-600">Active:</span>
                    <div className="flex space-x-1">
                      {product.activeChannels.includes('email') && (
                        <Mail className="w-4 h-4 text-blue-500" />
                      )}
                      {product.activeChannels.includes('instagram') && (
                        <Instagram className="w-4 h-4 text-pink-500" />
                      )}
                      {product.activeChannels.includes('sms') && (
                        <Bell className="w-4 h-4 text-purple-500" />
                      )}
                      {product.activeChannels.includes('website') && (
                        <Globe className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Agent Activity Log */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                AI Agent Decision Log
              </h2>
              <select
                value={selectedProduct}
                onChange={(e) =>
                  setSelectedProduct(e.target.value as SelectedProduct)
                }
                className="px-3 py-1 border rounded-md text-sm"
              >
                <option value="all">All Products</option>
                <option value="beanie">Beanie Hat</option>
                <option value="summer">Summer Top</option>
                <option value="shoes">Running Shoes</option>
                <option value="jacket">Winter Jacket</option>
              </select>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {agentLogs.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <AlertCircle className="w-12 h-12 mx-auto mb-3" />
                  <p>Click {'Start'} to begin simulation</p>
                  <p className="text-sm mt-2">
                    The AI will autonomously manage all 4 products
                  </p>
                </div>
              ) : (
                agentLogs
                  .filter(
                    (log) =>
                      selectedProduct === 'all' ||
                      log.productId === 'all' ||
                      log.productId === selectedProduct,
                  )
                  .map((log, index) => (
                    <div
                      key={`${log.day}-${index}-${log.productId}`}
                      className={`flex items-start space-x-3 p-3 rounded-lg ${
                        log.type === 'urgent'
                          ? 'bg-red-50'
                          : log.type === 'success'
                            ? 'bg-green-50'
                            : log.type === 'action'
                              ? 'bg-blue-50'
                              : 'bg-gray-50'
                      } ${index === agentLogs.length - 1 ? 'border-l-4 border-blue-500' : ''}`}
                    >
                      {getLogIcon(log.type)}
                      <div className="flex-1">
                        <div className="text-sm">{log.message}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {log.time}
                        </div>
                      </div>
                    </div>
                  ))
              )}

              {currentDay >= MAX_DAYS && (
                <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <div className="font-semibold text-green-900">
                        Simulation Complete!
                      </div>
                      <div className="text-sm text-green-700 mt-1">
                        Agent successfully managed 4 products autonomously:
                        <ul className="mt-2 space-y-1">
                          <li>• Total profit recovered: $2,156</li>
                          <li>• Average clearance rate: 73%</li>
                          <li>• Holding costs saved: $1,200</li>
                          <li>• Products hitting targets: 3 of 4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
