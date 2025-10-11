# pricepilot.ai

## Problem Statement

Retailers often hold slow-moving inventory that risks becoming obsolete or incurring high storage costs (which we never discussed). The goal is to liquidate this inventory quickly while maximising profit margin, not just by slashing prices, but by making data-driven markdown decisions (so our fixed % reduction may not be strong enough).

Key constraints:
- Limited time (e.g., end-of-season)
- Holding costs erode profit daily (this is the key to profit maximisation)
- Deep discounts hurt margins; no discounts risk total loss (i.e., we need to trade off - possibly some scale factor)


##  Core Idea: Profit-Aware Markdown Optimisation

Instead of applying fixed discounts (e.g., “20% off all winter stock”), the agent should:

1. Identify at-risk products  
2. Analyse market context (competitor prices, demand sensitivity)  
3. Simulate outcomes of different markdown levels  
4. Choose the markdown that maximises expected net profit (note the term - expected!)
5. Execute and log the action for review


##  How Do We Know We Maximised the Profit?

Unlike we discussed, where we focussed on the notion of profit being just (price - cost) × units_sold, the real profit apparently should account for other things, including :

- Avoided holding costs: Selling now saves future storage/obsolescence fees  
- Demand elasticity: A x% price drop might increase sales by y% (if elasticity is some function of these two) -we need to look into this. 

So, the net profit can be  modeled as:

net_profit = (price - unit_cost) * units_sold  + holding_cost_per_day * days_saved * unsold_units


## MCP design

We need to define a number of tool / utility functions (they should not retain any states - so we can chain them as we want it). We will also need a database (i.e. some fixed python code would cut it) coupled with a utility function. Here are some that LLM gave away: 


* get_slow_moving_inventory() for returning products with <= 10 days left
* get_competitor_prices(product_id) for returning simulated competitor prices
* estimate_demand_elasticity(product_id) for returning pre-defined elasticity
* adjust_markdown_and_promote(...) for applying markdown & simulates sales impact
* log_action_before_after(...) for recording decision for demo


We then need a decision logic (i.e. how do we glue these tool functions together). This can be like: 

```
foreach slow-moving poduct
	foreach markdown option (0, 5, 10, 15 ...)
		new_price = compute_new_price() 
		Forecast units sold using elasticity
		Calculate net profit (including avoided holding cost)
	Pick the markdown with highest profit
```


We can use langchin etc.

## Logging


The agent calls adjust_markdown_and_promote() with the optimal markdown, then logs:

* Before: Price, stock, expected profit
* After: New price, units sold, actual profit
* Delta: Profit improvement vs. no-action baseline


