import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-center mb-6">
            <svg
              className="w-16 h-16 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <h1 className="text-5xl font-bold">PricePilot.ai</h1>
          </div>
          <p className="text-2xl text-center text-blue-100 max-w-3xl mx-auto">
            AI-Powered Markdown Optimization for Maximum Profit
          </p>
          <p className="text-lg text-center text-blue-200 max-w-2xl mx-auto mt-4">
            Stop guessing on discounts. Let AI find the perfect price that
            maximizes your profit.
          </p>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <svg
              className="w-12 h-12 text-red-500 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800">
              The Challenge Retailers Face
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Every retailer struggles with{' '}
                <span className="font-bold text-red-600">
                  inventory that won&#39;t sell
                </span>
                . The longer it sits, the more money you lose:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Products Go Out of Style:</strong> Last season&#39;s
                    inventory becomes worthless
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Storage Costs Pile Up:</strong> Warehouse rent,
                    utilities, insurance - every day adds up
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Holding Costs Erode Profit:</strong> Staff time,
                    inventory management, capital tied up
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Wrong Discount = Lost Money:</strong> Too deep hurts
                    margins, too small and nothing sells
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">📦</div>
                <p className="text-lg font-semibold text-gray-700">
                  Slow-Moving Inventory
                </p>
              </div>
              <div className="flex justify-around items-center mt-6">
                <div className="text-center">
                  <div className="text-4xl mb-1">⏱️</div>
                  <p className="text-sm text-gray-600 font-semibold">
                    Limited
                    <br />
                    Time
                  </p>
                </div>
                <div className="text-5xl text-red-500">→</div>
                <div className="text-center">
                  <div className="text-4xl mb-1">💸</div>
                  <p className="text-sm text-gray-600 font-semibold">
                    Profit
                    <br />
                    Loss
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution: Core Idea */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 mb-12 border-2 border-blue-200">
          <div className="flex items-center mb-6">
            <svg
              className="w-12 h-12 text-blue-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800">
              How PricePilot Solves This
            </h2>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Instead of applying blanket discounts like &#34;20% off
            everything,&#34; PricePilot uses AI to find the{' '}
            <strong>perfect price for each product</strong> that maximizes your
            total profit.
          </p>

          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {[
              { icon: '🔍', title: 'Scan', desc: 'Find products at risk' },
              {
                icon: '📊',
                title: 'Analyze',
                desc: 'Check competitor prices & demand',
              },
              {
                icon: '🎯',
                title: 'Simulate',
                desc: 'Test different discount levels',
              },
              { icon: '🏆', title: 'Optimize', desc: 'Pick the best price' },
              { icon: '✅', title: 'Execute', desc: 'Apply & track results' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-2">{step.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              The Old Way vs. The Smart Way
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-50 rounded-lg border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">❌</span>
                  <h4 className="font-bold text-red-700 text-lg">
                    Traditional Approach
                  </h4>
                </div>
                <p className="text-base text-gray-700 mb-3 font-semibold">
                  &#34;20% off all winter stock&#34;
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Same discount for all products</li>
                  <li>• Ignores what customers will pay</li>
                  <li>• Doesn&#39;t consider storage costs</li>
                  <li>• Leaves money on the table</li>
                </ul>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">✅</span>
                  <h4 className="font-bold text-green-700 text-lg">
                    PricePilot.ai
                  </h4>
                </div>
                <p className="text-base text-gray-700 mb-3 font-semibold">
                  Smart, data-driven pricing
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Custom discount for each product</li>
                  <li>• Predicts customer demand response</li>
                  <li>• Factors in all costs (storage, time)</li>
                  <li>• Maximizes your bottom line</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Profit Formula */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <svg
              className="w-12 h-12 text-green-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800">
              The Secret: True Profit Calculation
            </h2>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Most retailers only think about{' '}
            <strong>(Price - Cost) × Items Sold</strong>. But that misses half
            the picture.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl mb-6 border-2 border-green-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                What PricePilot Calculates
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">💰</div>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  Your Real Profit =
                </p>
                <p className="text-base text-gray-700">
                  Money from sales{' '}
                  <span className="text-green-600 font-bold">+</span> Money
                  saved by not storing items
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-800 mb-4 flex items-center text-lg">
                <span className="text-3xl mr-3">💰</span>
                Sales Revenue
              </h4>
              <p className="text-base text-gray-700 mb-3">
                <strong>What you make per sale:</strong> Selling price minus
                what it cost you
              </p>
              <p className="text-base text-gray-700 mb-4">
                <strong>How many you&#39;ll sell:</strong> Lower prices = more
                buyers
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg shadow">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> A 10% discount might increase sales
                  by 30%
                </p>
              </div>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
              <h4 className="font-bold text-purple-800 mb-4 flex items-center text-lg">
                <span className="text-3xl mr-3">📦</span>
                Saved Costs
              </h4>
              <p className="text-base text-gray-700 mb-3">
                <strong>Storage fees:</strong> Warehouse space, utilities,
                insurance
              </p>
              <p className="text-base text-gray-700 mb-4">
                <strong>Time value:</strong> Every day unsold = money lost
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg shadow">
                <p className="text-sm text-gray-700">
                  <strong>Key Insight:</strong> Selling today saves
                  tomorrow&#39;s costs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-12 border-2 border-indigo-200">
          <div className="flex items-center mb-6">
            <svg
              className="w-12 h-12 text-indigo-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800">
              How PricePilot Works Its Magic
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: '🔍',
                title: 'Identifies At-Risk Items',
                desc: 'Finds products with less than 10 days before they become unsellable',
                color: 'red',
              },
              {
                icon: '💲',
                title: 'Checks Market Prices',
                desc: 'Sees what competitors are charging for similar items',
                color: 'blue',
              },
              {
                icon: '📈',
                title: 'Predicts Demand',
                desc: 'Estimates how price changes will affect sales volume',
                color: 'green',
              },
              {
                icon: '🎯',
                title: 'Tests Scenarios',
                desc: 'Simulates profits at 0%, 5%, 10%, 15% discounts and more',
                color: 'purple',
              },
              {
                icon: '🏆',
                title: 'Picks the Winner',
                desc: 'Selects the discount that gives you the highest profit',
                color: 'orange',
              },
              {
                icon: '✅',
                title: 'Tracks Results',
                desc: 'Monitors actual performance vs. predictions',
                color: 'indigo',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${step.color}-500 hover:shadow-lg transition`}
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2 text-base">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              The Decision Process
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-lg font-semibold flex-shrink-0">
                  1. Review each slow-moving product
                </div>
                <div className="flex-1 h-1 bg-indigo-300 mx-4"></div>
              </div>
              <div className="flex items-center pl-8">
                <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-lg font-semibold flex-shrink-0">
                  2. Try different discount levels
                </div>
                <div className="flex-1 h-1 bg-purple-300 mx-4"></div>
              </div>
              <div className="flex items-center pl-16">
                <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-semibold flex-shrink-0">
                  3. Calculate expected sales at each price
                </div>
                <div className="flex-1 h-1 bg-blue-300 mx-4"></div>
              </div>
              <div className="flex items-center pl-16">
                <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold flex-shrink-0">
                  4. Compute total profit (including saved costs)
                </div>
                <div className="flex-1 h-1 bg-green-300 mx-4"></div>
              </div>
              <div className="flex items-center pl-8">
                <div className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-lg font-semibold flex-shrink-0">
                  ✅ 5. Apply the most profitable discount
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <svg
              className="w-12 h-12 text-orange-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800">
              Complete Transparency
            </h2>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Every decision PricePilot makes is logged and tracked, so you can
            see exactly how it&#39;s improving your business.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-300 hover:shadow-lg transition">
              <h4 className="font-bold text-blue-800 mb-4 text-xl flex items-center">
                <span className="text-3xl mr-3">📋</span>
                Before
              </h4>
              <ul className="space-y-3 text-base text-gray-700">
                <li>• Original price</li>
                <li>• Stock on hand</li>
                <li>• Expected profit</li>
                <li>• Days until obsolete</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border-2 border-green-300 hover:shadow-lg transition">
              <h4 className="font-bold text-green-800 mb-4 text-xl flex items-center">
                <span className="text-3xl mr-3">✅</span>
                After
              </h4>
              <ul className="space-y-3 text-base text-gray-700">
                <li>• New sale price</li>
                <li>• Units sold</li>
                <li>• Actual profit</li>
                <li>• Costs saved</li>
              </ul>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg border-2 border-purple-300 hover:shadow-lg transition">
              <h4 className="font-bold text-purple-800 mb-4 text-xl flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Results
              </h4>
              <ul className="space-y-3 text-base text-gray-700">
                <li>• Profit increase</li>
                <li>• vs. doing nothing</li>
                <li>• Return on discount</li>
                <li>• Performance insights</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-orange-300">
            <p className="text-center text-gray-800 text-lg">
              <strong>🎯 Full Audit Trail:</strong> Every pricing decision
              documented for review, analysis, and continuous improvement
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join smart retailers who are maximizing profits with AI-powered
            pricing
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {process.env.NEXT_PUBLIC_SHOW_DEMO === 'true' ? (
              <Link
                href="/demo-start"
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
              >
                Watch Demo
              </Link>
            ) : (
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-700 transition">
                Contact Us
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
