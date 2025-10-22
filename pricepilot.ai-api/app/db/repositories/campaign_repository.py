# import random
# import re
#
# from sqlmodel import Session, select
# from typing import List, Optional
#
# from app.models import (
#     CampaignSimulation,
#     SimulationDayData,
#     SimulationInitialState
# )
#
#
# class Product:
#     """Product model matching frontend types"""
#
#     def __init__(self, **kwargs):
#         self.id: str = kwargs.get("id")
#         self.name: str = kwargs.get("name")
#         self.sku: str = kwargs.get("sku")
#         self.category: str = kwargs.get("category")
#         self.urgency: str = kwargs.get("urgency")
#         self.urgencyColor: str = kwargs.get("urgencyColor")
#         self.initialStock: int = kwargs.get("initialStock")
#         self.currentStock: int = kwargs.get("currentStock")
#         self.soldUnits: int = kwargs.get("soldUnits", 0)
#         self.basePrice: float = kwargs.get("basePrice")
#         self.currentPrice: float = kwargs.get("currentPrice")
#         self.currentDiscount: int = kwargs.get("currentDiscount", 0)
#         self.daysLeft: int = kwargs.get("daysLeft")
#         self.holdingCostPerDay: float = kwargs.get("holdingCostPerDay", 0.5)
#         self.targetSellThrough: int = kwargs.get("targetSellThrough", 90)
#         self.currentSellThrough: float = kwargs.get("currentSellThrough", 0)
#         self.salesVelocity: float = kwargs.get("salesVelocity")
#         self.status: str = kwargs.get("status", "monitoring")
#         self.activeChannels: List[str] = kwargs.get("activeChannels", [])
#         self.totalRevenue: float = kwargs.get("totalRevenue", 0)
#         self.agentFocus: bool = kwargs.get("agentFocus", False)
#
#     def dict(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "sku": self.sku,
#             "category": self.category,
#             "urgency": self.urgency,
#             "urgencyColor": self.urgencyColor,
#             "initialStock": self.initialStock,
#             "currentStock": self.currentStock,
#             "soldUnits": self.soldUnits,
#             "basePrice": self.basePrice,
#             "currentPrice": self.currentPrice,
#             "currentDiscount": self.currentDiscount,
#             "daysLeft": self.daysLeft,
#             "holdingCostPerDay": self.holdingCostPerDay,
#             "targetSellThrough": self.targetSellThrough,
#             "currentSellThrough": self.currentSellThrough,
#             "salesVelocity": self.salesVelocity,
#             "status": self.status,
#             "activeChannels": self.activeChannels,
#             "totalRevenue": self.totalRevenue,
#             "agentFocus": self.agentFocus
#         }
#
#
# class CampaignRepository:
#     """Repository for campaign simulation operations"""
#
#     def __init__(self, session: Session):
#         self.session = session
#
#     def create_simulation(self, ai_analysis: dict) -> CampaignSimulation:
#         """
#         Create campaign simulation and generate all day data from AI analysis
#         """
#         campaign_data = ai_analysis.get("campaign_analysis", {})
#
#         # Extract product IDs
#         product_ids = [
#             product["product_id"]
#             for product in campaign_data.get("products", [])
#         ]
#
#         # Create simulation record
#         simulation = CampaignSimulation(
#             product_ids=product_ids,
#             duration_days=campaign_data.get("campaign_plan", {}).get("duration_days", 7),
#             ai_analysis_json=ai_analysis
#         )
#         self.session.add(simulation)
#         self.session.commit()
#         self.session.refresh(simulation)
#
#         # Generate initial state
#         initial_products = self._generate_initial_products(ai_analysis)
#         initial_metrics = self._calculate_initial_metrics(initial_products)
#
#         initial_state = SimulationInitialState(
#             simulation_id=simulation.id,
#             initial_products=[p.dict() for p in initial_products],
#             initial_metrics=initial_metrics
#         )
#         self.session.add(initial_state)
#         self.session.commit()
#
#         # Generate all simulation days
#         current_products = initial_products
#         for day in range(1, simulation.duration_days + 1):
#             day_data = self._simulate_single_day(
#                 ai_analysis=ai_analysis,
#                 day_number=day,
#                 previous_products=current_products
#             )
#
#             sim_day = SimulationDayData(
#                 simulation_id=simulation.id,
#                 day_number=day,
#                 products=[p.dict() for p in day_data["products"]],
#                 agent_logs=day_data["agent_logs"],
#                 global_metrics=day_data["global_metrics"]
#             )
#             self.session.add(sim_day)
#
#             # Update for next iteration
#             current_products = day_data["products"]
#
#         self.session.commit()
#
#         return simulation
#
#     def get_simulation(self, simulation_id: int) -> Optional[CampaignSimulation]:
#         """Get simulation by ID"""
#         statement = select(CampaignSimulation).where(
#             CampaignSimulation.id == simulation_id
#         )
#         return self.session.exec(statement).first()
#
#     def get_day_data(self, simulation_id: int, day_number: int) -> Optional[SimulationDayData]:
#         """Get simulation data for a specific day"""
#         statement = (
#             select(SimulationDayData)
#             .where(
#                 SimulationDayData.simulation_id == simulation_id,
#                 SimulationDayData.day_number == day_number
#             )
#         )
#         return self.session.exec(statement).first()
#
#     def get_initial_state(self, simulation_id: int) -> Optional[SimulationInitialState]:
#         """Get initial state (Day 0) for simulation"""
#         statement = (
#             select(SimulationInitialState)
#             .where(SimulationInitialState.simulation_id == simulation_id)
#         )
#         return self.session.exec(statement).first()
#
#     def get_all_days(self, simulation_id: int) -> List[SimulationDayData]:
#         """Get all day data for a simulation"""
#         statement = (
#             select(SimulationDayData)
#             .where(SimulationDayData.simulation_id == simulation_id)
#             .order_by(SimulationDayData.day_number)
#         )
#         return self.session.exec(statement).all()
#
#     # Private helper methods
#
#     def _generate_initial_products(self, ai_analysis: dict) -> List[Product]:
#         """Convert AI analysis to initial Product objects (Day 0)"""
#         products = []
#         campaign_data = ai_analysis.get("campaign_analysis", {})
#
#         # Map product names to simple IDs
#         product_id_map = {
#             "Beanie Hat": "beanie",
#             "Summer Top": "summer",
#             "Running Shoes": "shoes",
#             "Winter Jacket": "jacket"
#         }
#
#         for product_data in campaign_data.get("products", []):
#             name = product_data["name"]
#             product_id = product_id_map.get(name, name.lower().replace(" ", "_"))
#
#             # Determine urgency color
#             urgency = product_data["urgency_level"]
#             urgency_color = {
#                 "URGENT": "red",
#                 "MODERATE": "yellow",
#                 "LOW": "green"
#             }.get(urgency, "yellow")
#
#             product = Product(
#                 id=product_id,
#                 name=name,
#                 sku=product_data["sku"],
#                 category=product_data["category"],
#                 urgency=urgency,
#                 urgencyColor=urgency_color,
#                 initialStock=product_data["stock_units"],
#                 currentStock=product_data["stock_units"],
#                 soldUnits=0,
#                 basePrice=float(product_data["current_price"]),
#                 currentPrice=float(product_data["current_price"]),
#                 currentDiscount=0,
#                 daysLeft=product_data["days_until_clearance"],
#                 holdingCostPerDay=0.5,
#                 targetSellThrough=90 if urgency == "URGENT" else 75,
#                 currentSellThrough=0,
#                 salesVelocity=float(product_data["sales_rate"]),
#                 status="monitoring",
#                 activeChannels=[],
#                 totalRevenue=0,
#                 agentFocus=False
#             )
#             products.append(product)
#
#         return products
#
#     def _calculate_initial_metrics(self, products: List[Product]) -> dict:
#         """Calculate initial global metrics"""
#         total_inventory_value = sum(
#             p.currentStock * p.currentPrice
#             for p in products
#         )
#
#         return {
#             "totalInventoryValue": total_inventory_value,
#             "projectedProfit": 0,
#             "productsActioned": 0,
#             "avgSellThrough": 0,
#             "totalHoldingCostSaved": 0
#         }
#
#     def _parse_velocity_boost(self, boost_text: str) -> tuple[float, float]:
#         """Parse '3-4x velocity boost' → (3.0, 4.0)"""
#         match = re.search(r'(\d+(?:\.\d+)?)[–-](\d+(?:\.\d+)?)x', boost_text)
#         if match:
#             return float(match.group(1)), float(match.group(2))
#
#         # Try single number
#         match = re.search(r'(\d+(?:\.\d+)?)x', boost_text)
#         if match:
#             value = float(match.group(1))
#             return value, value
#
#         return 1.5, 2.0  # default
#
#     def _get_activation_day(self, product_name: str, ai_analysis: dict) -> int:
#         """Determine which day a product should be activated"""
#         campaign_data = ai_analysis.get("campaign_analysis", {})
#         phases = campaign_data.get("campaign_plan", {}).get("phases", [])
#
#         for phase in phases:
#             if product_name in phase.get("products", []):
#                 duration = phase.get("duration", "Day 1")
#                 match = re.search(r'Days? (\d+)', duration)
#                 if match:
#                     return int(match.group(1))
#
#         return 1  # default to day 1
#
#     def _get_channels_for_product(self, product_name: str, ai_analysis: dict) -> List[str]:
#         """Get marketing channels for a product from AI analysis"""
#         campaign_data = ai_analysis.get("campaign_analysis", {})
#         channels_data = campaign_data.get("marketing_channels", [])
#
#         channels = []
#         for channel_info in channels_data:
#             if product_name in channel_info.get("products", []):
#                 channel_name = channel_info["channel"].lower()
#
#                 # Map to frontend channel types
#                 if "email" in channel_name:
#                     channels.append("email")
#                 elif "instagram" in channel_name or "social" in channel_name:
#                     channels.append("instagram")
#                 elif "sms" in channel_name or "push" in channel_name:
#                     channels.append("sms")
#                 elif "website" in channel_name or "banner" in channel_name:
#                     channels.append("website")
#
#         return channels
#
#     def _simulate_single_day(
#             self,
#             ai_analysis: dict,
#             day_number: int,
#             previous_products: List[Product]
#     ) -> dict:
#         """Simulate a single day and return products, logs, and metrics"""
#         campaign_data = ai_analysis.get("campaign_analysis", {})
#
#         # Copy products from previous day
#         current_products = []
#         for prev_prod in previous_products:
#             product = Product(**prev_prod.dict())
#             product.daysLeft = max(0, product.daysLeft - 1)
#             current_products.append(product)
#
#         agent_logs = []
#         products_actioned = 0
#         total_daily_sales = 0
#         total_daily_revenue = 0
#
#         # Check each product for actions
#         for i, product in enumerate(current_products):
#             # Find corresponding AI recommendation
#             ai_product = next(
#                 (p for p in campaign_data.get("products", [])
#                  if p["sku"] == product.sku),
#                 None
#             )
#
#             if not ai_product:
#                 continue
#
#             recommendation = ai_product.get("recommended_action", {})
#             activation_day = self._get_activation_day(product.name, ai_analysis)
#
#             # Should we apply markdown today?
#             should_activate = (
#                     day_number == activation_day and
#                     product.currentDiscount == 0
#             )
#
#             # Should we increase markdown?
#             should_increase = (
#                     product.currentDiscount > 0 and
#                     product.daysLeft <= 3 and
#                     product.currentSellThrough < 40
#             )
#
#             if should_activate:
#                 # Apply initial markdown
#                 discount = recommendation.get("discount_percentage", 30)
#                 new_price = recommendation.get("new_price", product.basePrice * 0.7)
#                 channels = self._get_channels_for_product(product.name, ai_analysis)
#
#                 product.currentDiscount = discount
#                 product.currentPrice = float(new_price)
#                 product.status = "markdown_active"
#                 product.activeChannels = channels
#
#                 # Parse velocity boost
#                 boost_text = recommendation.get("expected_velocity_boost", "2x")
#                 boost_min, boost_max = self._parse_velocity_boost(boost_text)
#                 velocity_boost = random.uniform(boost_min, boost_max)
#
#                 # Calculate sales
#                 expected_sales = product.salesVelocity * velocity_boost
#                 variance = random.uniform(0.85, 1.15)
#                 actual_sales = int(expected_sales * variance)
#                 actual_sales = min(actual_sales, product.currentStock)
#
#                 product.currentStock -= actual_sales
#                 product.soldUnits += actual_sales
#                 product.currentSellThrough = (product.soldUnits / product.initialStock) * 100
#                 product.totalRevenue += actual_sales * product.currentPrice
#                 product.salesVelocity = actual_sales
#
#                 total_daily_sales += actual_sales
#                 total_daily_revenue += actual_sales * product.currentPrice
#                 products_actioned += 1
#
#                 # Add log
#                 agent_logs.append({
#                     "day": day_number,
#                     "time": f"Day {day_number}, {9 + i}:00 AM",
#                     "productId": product.id,
#                     "message": f"🔥 Applying {discount}% markdown to {product.name} → ${product.currentPrice:.2f}",
#                     "type": "action"
#                 })
#
#             elif should_increase:
#                 # Increase markdown
#                 new_discount = min(product.currentDiscount + 10, 60)
#                 product.currentDiscount = new_discount
#                 product.currentPrice = product.basePrice * (100 - new_discount) / 100
#
#                 # Higher boost for increased markdown
#                 velocity_boost = random.uniform(2.5, 3.5)
#                 expected_sales = product.salesVelocity * velocity_boost
#                 variance = random.uniform(0.85, 1.15)
#                 actual_sales = int(expected_sales * variance)
#                 actual_sales = min(actual_sales, product.currentStock)
#
#                 product.currentStock -= actual_sales
#                 product.soldUnits += actual_sales
#                 product.currentSellThrough = (product.soldUnits / product.initialStock) * 100
#                 product.totalRevenue += actual_sales * product.currentPrice
#                 product.salesVelocity = actual_sales
#
#                 total_daily_sales += actual_sales
#                 total_daily_revenue += actual_sales * product.currentPrice
#
#                 agent_logs.append({
#                     "day": day_number,
#                     "time": f"Day {day_number}, {9 + i}:00 AM",
#                     "productId": product.id,
#                     "message": f"🚨 URGENT ADJUSTMENT: {product.name} markdown increased to {new_discount}% → ${product.currentPrice:.2f}",
#                     "type": "urgent"
#                 })
#
#             else:
#                 # Natural sales
#                 multiplier = 1.5 if product.currentDiscount > 0 else 1.0
#                 expected_sales = product.salesVelocity * multiplier
#                 variance = random.uniform(0.9, 1.1)
#                 actual_sales = int(expected_sales * variance)
#                 actual_sales = min(actual_sales, product.currentStock)
#
#                 if actual_sales > 0:
#                     product.currentStock -= actual_sales
#                     product.soldUnits += actual_sales
#                     product.currentSellThrough = (product.soldUnits / product.initialStock) * 100
#                     product.totalRevenue += actual_sales * product.currentPrice
#
#                     total_daily_sales += actual_sales
#                     total_daily_revenue += actual_sales * product.currentPrice
#
#         # Calculate global metrics
#         total_inventory_value = sum(p.currentStock * p.currentPrice for p in current_products)
#         avg_sell_through = sum(p.currentSellThrough for p in current_products) / len(current_products)
#
#         global_metrics = {
#             "totalInventoryValue": round(total_inventory_value, 2),
#             "projectedProfit": round(day_number * 308, 2),
#             "productsActioned": products_actioned,
#             "avgSellThrough": round(avg_sell_through, 1),
#             "totalHoldingCostSaved": round(day_number * 171, 2)
#         }
#
#         return {
#             "products": current_products,
#             "agent_logs": agent_logs,
#             "global_metrics": global_metrics
#         }
