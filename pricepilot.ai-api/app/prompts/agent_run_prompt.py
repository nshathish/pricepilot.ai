SIMULATION_GENERATION_PROMPT = """
    You are an expert campaign simulation designer. Generate realistic simulation run data for a {duration_days}-day clearance campaign visualization.
    
    ## INPUT DATA ANALYSIS:
    {analysis_summary}
    
    **Product Details:**
    {product_details}
    
    **Product Actions:**
    {product_actions}
    
    ## GENERATION REQUIREMENTS:
    
    Return a JSON object with exactly this structure:
    
    {{
      "initial_products": [
        // Array of Product objects based on the clearance analysis
      ],
      "simulation_plan": {{
        // Object with day numbers as keys and SimulationEvent arrays as values
      }}
    }}
    
    ### 1. initial_products Array
    Create Product objects with these exact fields:
    {{
      "id": "string", // short identifier like 'beanie', 'summer', 'shoes', 'jacket'
      "name": "string", // product name from analysis
      "sku": "string", // generate realistic SKU like 'BEAN-HAT-004'
      "category": "string", // product category
      "urgency": "URGENT" | "MODERATE" | "ON TRACK", // based on confidence and impact
      "urgencyColor": "red" | "yellow" | "green", // red=URGENT, yellow=MODERATE, green=ON TRACK
      "initialStock": number, // units from analysis
      "currentStock": number, // same as initialStock (simulation starts fresh)
      "soldUnits": 0, // always 0 (start of simulation)
      "basePrice": number, // current_price from analysis
      "currentPrice": number, // same as basePrice initially
      "currentDiscount": 0, // always 0 initially
      "daysLeft": number, // estimate based on urgency (1-30 days)
      "holdingCostPerDay": number, // estimate 3-8% of base price
      "targetSellThrough": number, // percentage goal (70-95%)
      "currentSellThrough": 0, // always 0 initially
      "salesVelocity": number, // units per day estimate
      "status": "monitoring", // always start with monitoring
      "activeChannels": [], // empty array initially
      "totalRevenue": 0, // always 0 initially
      "agentFocus": false // always false initially
    }}
    
    ### 2. simulation_plan Object
    Create a day-by-day plan with SimulationEvent objects:
    {{
      "0": [
        {{
          "productId": "all",
          "action": "INITIAL_SCAN",
          "message": "🤖 Agent starting inventory analysis...",
          "type": "system"
        }},
        {{
          "productId": "product_id",
          "action": "IDENTIFY_URGENT" | "IDENTIFY_MODERATE",
          "message": "descriptive message about the product situation",
          "type": "alert" | "warning"
        }}
      ],
      "1": [
        {{
          "productId": "product_id",
          "action": "APPLY_MARKDOWN",
          "message": "💰 Applying X% markdown to Product → $Y.YY",
          "discount": number, // percentage discount
          "channels": ["email", "instagram"], // marketing channels
          "type": "action"
        }}
      ],
      // Continue for all {duration_days} days with realistic events
    }}
    
    Available actions: INITIAL_SCAN, IDENTIFY_URGENT, IDENTIFY_MODERATE, APPLY_MARKDOWN, MONITOR, CHANNELS_ACTIVATED, ADJUST_STRATEGY, SUCCESS, WARNING
    
    Available types: system, alert, warning, action, analysis, channel, success
    
    ## RULES:
    1. Return ONLY valid JSON - no markdown, no code blocks, no explanations
    2. Use the actual product data from the analysis above
    3. Create realistic day-by-day progression showing:
       - Day 0: Initial scanning and identification
       - Day 1-2: Apply initial markdowns and activate channels
       - Day 3+: Monitor performance, adjust strategies
       - Final days: Results and success/warning messages
    4. Make urgency realistic based on actual stock levels and confidence scores
    5. Price discounts should reflect the suggested_price vs current_price in the analysis
    6. Generate {duration_days} days of simulation events
    
    Return the JSON object now:
"""