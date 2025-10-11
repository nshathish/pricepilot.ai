# pricepilot.ai - AI-Powered Price Optimization for E-commerce

## 🧩 Database Schema Overview

Each Prisma **model** maps to a corresponding **PostgreSQL table** (in snake_case).  
This section documents what each table/model represents, key fields, and why it matters.

---

### 🛍️ 1. `Product`
*(table: `products`)*

**Purpose:**  
Master catalogue of all items eligible for optimisation.

**Key columns**

| Column | Description |
|---------|-------------|
| `sku`, `name`, `category`, `brand` | Identifiers and metadata. |
| `unit_cost`, `base_price`, `current_price` | Core pricing fields. |
| `holding_cost_per_unit_per_day` | Daily cost of storing a unit. |
| `clearance_end_date` | Deadline for liquidation. |
| `status`, `created_at` | Lifecycle and audit fields. |

💡 **Why it matters:**  
Anchor entity connecting inventory, pricing, sales, elasticity, and markdown logic.

---

### 📦 2. `Inventory`
*(table: `inventory`)*

**Purpose:**  
Tracks available stock by product and location.

**Key columns**

| Column | Description |
|---------|-------------|
| `product_id` | Foreign key → `products`. |
| `location` | Warehouse/store identifier. |
| `stock_on_hand`, `reserved` | Units available vs. allocated. |

💡 **Why it matters:**  
Used to identify slow movers and to simulate how quickly stock can clear under different markdowns.

---

### 💰 3. `PriceHistory`
*(table: `price_history`)*

**Purpose:**  
Logs every historical price and markdown change.

**Key columns**

| Column | Description |
|---------|-------------|
| `price_id` | Unique ID. |
| `product_id` | Foreign key → `products`. |
| `price`, `markdown_pct` | Recorded price and applied markdown. |
| `started_at`, `ended_at` | Time window for the price period. |

💡 **Why it matters:**  
Supports auditing, rollback, and model retraining on past decisions.

---

### 📈 4. `SalesDaily`
*(table: `sales_daily`)*

**Purpose:**  
Daily sales performance snapshot.

**Key columns**

| Column | Description |
|---------|-------------|
| `product_id`, `sale_date` | Composite key identifying the record. |
| `units_sold`, `avg_unit_price` | Quantity and realised price. |
| `promo_flag` | Indicates promotion-driven sales. |

💡 **Why it matters:**  
Forms the empirical data for estimating demand elasticity and profit curves.

---

### 📊 5. `ElasticityEstimate`
*(table: `elasticity_estimates`)*

**Purpose:**  
Stores estimated price elasticity for each product.

**Key columns**

| Column | Description |
|---------|-------------|
| `elasticity` | Sensitivity of demand to price change. |
| `method`, `sample_size`, `confidence` | Metadata on estimation process. |
| `last_updated` | When recalculated. |

💡 **Why it matters:**  
Feeds the agent’s demand simulation and profit optimisation engine.

---

### 🏪 6. `Competitor`
*(table: `competitors`)*

**Purpose:**  
Registry of competitor retailers for contextual pricing.

**Key columns**

| Column | Description |
|---------|-------------|
| `competitor_id` | Unique ID. |
| `name`, `url` | Competitor details. |

💡 **Why it matters:**  
Enables benchmarking and competitive price alignment.

---

### 🔢 7. `CompetitorPrice`
*(table: `competitor_prices`)*

**Purpose:**  
Stores daily competitor pricing for each product.

**Key columns**

| Column | Description |
|---------|-------------|
| `competitor_id`, `product_id`, `price_date` | Composite key. |
| `price` | Competitor’s listed price. |

💡 **Why it matters:**  
Used by the agent to assess market positioning before applying markdowns.

---

### 🧮 8. `MarkdownEvaluation`
*(table: `markdown_evaluations`)*

**Purpose:**  
Simulated profit impact for multiple markdown options.

**Key columns**

| Column | Description |
|---------|-------------|
| `baseline_price`, `baseline_expected_units`, `baseline_expected_profit` | No-action baseline. |
| `markdown_pct`, `candidate_price` | Candidate markdown scenario. |
| `expected_units`, `expected_profit` | Forecasted demand and profit. |
| `expected_days_to_sell`, `expected_unsold_units` | Inventory outcomes. |
| `is_optimal` | Indicates the chosen markdown. |

💡 **Why it matters:**  
Provides traceable rationale for every pricing decision.

---

### 🧾 9. `MarkdownActionLog`
*(table: `markdown_actions_log`)*

**Purpose:**  
Records the actual execution of a markdown (after simulation).

**Key columns**

| Column | Description |
|---------|-------------|
| `before_price`, `after_price` | Price change details. |
| `stock_at_action` | Remaining stock at time of action. |
| `expected_profit`, `baseline_profit`, `delta_expected_profit` | Financial impact summary. |
| `notes` | Optional commentary or reason code. |

💡 **Why it matters:**  
Supports auditing, dashboard analytics, and “what-if vs. reality” analysis.

---

### 📉 10. `ActionOutcome`
*(table: `action_outcomes`)*

**Purpose:**  
Captures realised performance after a markdown action (post-hoc evaluation).

**Key columns**

| Column | Description |
|---------|-------------|
| `action_id` | Link → `markdown_actions_log`. |
| `window_start`, `window_end` | Evaluation period. |
| `actual_units_sold`, `actual_profit` | Realised performance. |

💡 **Why it matters:**  
Validates forecast accuracy and feeds model retraining.

---

### ⚙️ 11. `Setting`
*(table: `settings`)*

**Purpose:**  
Holds global configuration parameters in JSON form.

**Key columns**

| Column | Description |
|---------|-------------|
| `key` | Config name. |
| `value` | JSONB configuration payload. |
| `updated_at` | Last modified timestamp. |

💡 **Why it matters:**  
Allows dynamic tuning of markdown logic (e.g., discount grids, guardrails) without redeploying code.

---

### 🔍 12. `slow_moving_candidates` (View)

**Purpose:**  
Lists all products with ≤ 10 days remaining before clearance and non-zero stock.

**Derived columns:**  
`product_id`, `sku`, `name`, `stock_on_hand`, `current_price`, `holding_cost_per_unit_per_day`, `clearance_end_date`, `days_left`.

💡 **Why it matters:**  
Feeds the `get_slow_moving_inventory()` tool for identifying products at risk of obsolescence.

---

### 🧠 Function ↔ Table Mapping

| Function | Primary Tables / Models Used |
|-----------|------------------------------|
| `get_slow_moving_inventory()` | `slow_moving_candidates` view |
| `get_competitor_prices(product_id)` | `CompetitorPrice`, `Competitor` |
| `estimate_demand_elasticity(product_id)` | `ElasticityEstimate` |
| `adjust_markdown_and_promote(...)` | `Product`, `PriceHistory`, `MarkdownActionLog` |
| `log_action_before_after(...)` | `MarkdownActionLog`, `ActionOutcome` |

### Schema Diagram
<img width="1507" height="2114" alt="pricepilot_schema_er" src="https://github.com/user-attachments/assets/3a73db5a-7d4b-4ec6-b0a2-12f8411a14fa" />


---
