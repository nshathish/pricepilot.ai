import json
from typing import Any, Dict

from anthropic import AsyncAnthropic
from anthropic.types import MessageParam

from app.prompts.agent_run_prompt import SIMULATION_GENERATION_PROMPT
from app.schemas.responses.clearance_analysis_response import ClearanceAnalysisResponse


def convert_response_to_dict(response: ClearanceAnalysisResponse) -> Dict[str, Any]:
    """Convert ClearanceAnalysisResponse to dictionary for prompt generation"""
    return {
        "analysis_id": getattr(response, 'analysis_id', 'sim_001'),
        "total_products": len(response.products),
        "total_revenue_impact": response.executive_summary.expected_profit_impact,
        "total_units_affected": sum(p.stock_units for p in response.products),
        "products": [
            {
                "product_id": product.product_id,
                "product_name": product.name,
                "sku": product.sku,
                "category": product.category,
                "current_price": product.current_price,
                "suggested_price": product.recommended_action.new_price,
                "price_change": product.recommended_action.new_price - product.current_price,
                "stock_units": product.stock_units,
                "sales_rate": product.sales_rate,
                "days_until_clearance": product.days_until_clearance,
                "urgency_level": product.urgency_level,
                "discount_percentage": product.recommended_action.discount_percentage,
                "action_type": "clearance" if product.recommended_action.new_price < product.current_price else "maintain"
            }
            for product in response.products
        ]
    }


def get_analysis_summary(response: ClearanceAnalysisResponse) -> str:
    """Generate a summary of the clearance analysis for AI context"""
    product_count = len(response.products)
    total_stock = sum(p.stock_units for p in response.products)
    urgent_count = len(response.executive_summary.urgent_products)
    moderate_count = response.executive_summary.moderate_priority_count

    return f"""
    Analysis Summary:
    - {product_count} products analyzed
    - Total revenue impact: ${response.executive_summary.expected_profit_impact:,.2f}
    - Total stock units: {total_stock:,}
    - Urgent actions needed: {urgent_count}
    - Moderate priority items: {moderate_count}
    - Campaign duration: {response.campaign_plan.duration_days} days
    - Analysis focuses on clearance pricing strategies
    """


def generate_simulation_prompt(response: ClearanceAnalysisResponse, duration_days: int = None) -> str:
    """Generate AI prompt for TypeScript simulation code generation"""

    # Use campaign duration from the response if no override provided
    if duration_days is None:
        duration_days = response.campaign_plan.duration_days

    # Convert response to dictionary format
    response_dict = convert_response_to_dict(response)

    # Get analysis summary for context
    analysis_summary = get_analysis_summary(response)

    # Format product details for the prompt
    product_details = []
    product_actions = []

    for product in response_dict["products"]:
        product_details.append(
            f"Product {product['product_id']}: {product['product_name']} "
            f"(${product['current_price']:.2f} → ${product['suggested_price']:.2f}, "
            f"urgency: {product['urgency_level']})"
        )

        action_desc = f"Price change for {product['product_name']}: "
        if product['action_type'] == 'clearance':
            action_desc += f"Reduce to ${product['suggested_price']:.2f} (clearance)"
        else:
            action_desc += f"Maintain at ${product['current_price']:.2f}"

        product_actions.append(action_desc)

    # Generate the final prompt
    prompt = SIMULATION_GENERATION_PROMPT.format(
        duration_days=duration_days,
        product_details="\n".join(f"  - {detail}" for detail in product_details),
        product_actions="\n".join(f"  - {action}" for action in product_actions),
        analysis_summary=analysis_summary
    )

    return prompt


async def generate_simulation_typescript(
        response: ClearanceAnalysisResponse,
        api_key: str,
        duration_days: int = None
) -> Dict[str, Any]:
    """
    Generate simulation data using AI

    Args:
        response: ClearanceAnalysisResponse with clearance analysis data
        api_key: Anthropic API key
        duration_days: Simulation duration in days (defaults to campaign_plan.duration_days)

    Returns:
        Dictionary with initial_products and simulation_plan data
    """

    # Use campaign duration from the response if no override provided
    if duration_days is None:
        duration_days = response.campaign_plan.duration_days

    # Generate the prompt
    prompt = generate_simulation_prompt(response, duration_days)

    # Initialize Anthropic client
    client = AsyncAnthropic(api_key=api_key)

    try:
        # Call Claude API
        messages: list[MessageParam] = [{"role": "user", "content": prompt}]
        message = await client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=4000,
            temperature=0.3,
            messages=messages
        )

        # Extract the response content
        response_content = message.content[0].text if message.content else ""

        # Parse the JSON response
        simulation_data = parse_json_response(response_content)

        # Validate the required structure
        if not validate_simulation_structure(simulation_data):
            raise ValueError("Generated data doesn't have the required structure")

        return {
            "success": True,
            "initial_products": simulation_data["initial_products"],
            "simulation_plan": simulation_data["simulation_plan"],
            "prompt_used": prompt,
            "model": "claude-3-5-sonnet-20241022",
            "total_products": len(simulation_data["initial_products"]),
            "total_days": len(simulation_data["simulation_plan"])
        }

    except Exception as e:
        return {
            "success": False,
            "initial_products": [],
            "simulation_plan": {},
            "prompt_used": prompt,
            "model": "claude-3-5-sonnet-20241022",
            "error": str(e)
        }


def clean_typescript_response(response: str) -> str:
    """Clean AI response to extract pure TypeScript code"""

    # Remove markdown code blocks
    if "```typescript" in response:
        start = response.find("```typescript") + len("```typescript")
        end = response.find("```", start)
        if end != -1:
            response = response[start:end]
    elif "```ts" in response:
        start = response.find("```ts") + len("```ts")
        end = response.find("```", start)
        if end != -1:
            response = response[start:end]
    elif "```" in response:
        start = response.find("```") + 3
        end = response.find("```", start)
        if end != -1:
            response = response[start:end]

    # Clean up whitespace
    response = response.strip()

    return response


def parse_json_response(response: str) -> Dict[str, Any]:
    """Parse AI response to extract JSON data"""

    # Remove any markdown code blocks
    if "```json" in response:
        start = response.find("```json") + len("```json")
        end = response.find("```", start)
        if end != -1:
            response = response[start:end]
    elif "```" in response:
        start = response.find("```") + 3
        end = response.find("```", start)
        if end != -1:
            response = response[start:end]

    # Clean up whitespace
    response = response.strip()

    # Parse JSON
    try:
        return json.loads(response)
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse JSON response: {e}")


def validate_simulation_structure(data: Dict[str, Any]) -> bool:
    """Validate that the simulation data has the required structure"""

    if not isinstance(data, dict):
        return False

    # Check for required top-level keys
    if "initial_products" not in data or "simulation_plan" not in data:
        return False

    # Check initial_products is an array
    if not isinstance(data["initial_products"], list):
        return False

    # Check simulation_plan is an object
    if not isinstance(data["simulation_plan"], dict):
        return False

    # Validate each product has required fields
    for product in data["initial_products"]:
        if not isinstance(product, dict):
            return False

        required_fields = ["id", "name", "sku", "category", "urgency", "urgencyColor",
                           "initialStock", "currentStock", "soldUnits", "basePrice",
                           "currentPrice", "currentDiscount", "daysLeft", "holdingCostPerDay",
                           "targetSellThrough", "currentSellThrough", "salesVelocity",
                           "status", "activeChannels", "totalRevenue", "agentFocus"]

        for field in required_fields:
            if field not in product:
                return False

    # Validate simulation_plan structure
    for day_key, events in data["simulation_plan"].items():
        if not isinstance(events, list):
            return False

        for event in events:
            if not isinstance(event, dict):
                return False

            required_event_fields = ["productId", "action", "message", "type"]
            for field in required_event_fields:
                if field not in event:
                    return False

    return True


def is_valid_typescript_structure(code: str) -> bool:
    """Basic validation of TypeScript code structure"""

    if not code.strip():
        return False

    # Check for basic TypeScript patterns
    typescript_indicators = [
        "export const",
        "export default",
        "interface",
        "type",
        ": string",
        ": number",
        ": boolean"
    ]

    has_typescript = any(indicator in code for indicator in typescript_indicators)

    # Check for balanced braces (basic syntax check)
    open_braces = code.count('{')
    close_braces = code.count('}')
    balanced_braces = open_braces == close_braces

    return has_typescript and balanced_braces
