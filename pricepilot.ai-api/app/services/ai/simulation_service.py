import json
from typing import Any

from anthropic import AsyncAnthropic
from anthropic.types import MessageParam

from app.helpers.monte_carlo_prompt_generator import generate_monte_carlo_prompt
from app.schemas.clearance_analysis_response import ClearanceAnalysisResponse


async def get_config_for_monte_carlo(
        clearance_analysis: ClearanceAnalysisResponse,
        api_key: str
) -> dict[str, Any]:
    prompt = generate_monte_carlo_prompt(clearance_analysis)
    try:
        # Initialize Anthropic client
        client = AsyncAnthropic(api_key=api_key)

        # Call Claude API
        messages: list[MessageParam] = [{"role": "user", "content": prompt}]
        message = await client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4000,
            messages=messages
        )

        # Extract the text response
        response_text = message.content[0].text

        # Remove mark-down code blocks if present
        if response_text.startswith("```json"):
            response_text = response_text.replace("```json\n", "").replace("```json", "")
        if response_text.startswith("```"):
            response_text = response_text.replace("```\n", "").replace("```", "")
        # Remove trailing markdown
        if response_text.endswith("```"):
            response_text = response_text.replace("```", "").strip()

        response_text = response_text.strip()

        # Debug: Print first 500 characters
        print(f"Cleaned response preview: {response_text}")

        parsed_json = None  # Initialize to avoid reference before assignment

        try:
            # First try to parse as JSON to get better error messages
            parsed_json = json.loads(response_text)
            return parsed_json
        except json.JSONDecodeError as e:
            print(f"JSON Parse Error: {e}")
            print(f"Error at position: {e.pos}")
            print(f"Error line: {e.lineno}, column: {e.colno}")
            print(f"Response text around error: ...{response_text[max(0, e.pos - 50):e.pos + 50]}...")
            raise ValueError(
                f"Failed to parse AI response as JSON: {str(e)}. "
                f"Response may be malformed. Check logs for details."
            )
        except Exception as e:
            print(f"Validation Error: {e}")
            print(f"Response type: {type(parsed_json)}")
            if isinstance(parsed_json, dict):
                print(f"Response keys: {parsed_json.keys()}")
            raise ValueError(
                f"Response validation failed: {str(e)}. "
                f"AI response structure may not match expected schema."
            )

    except ValueError as e:
        # Re-raise ValueError (API key missing or parsing issues)
        raise
    except Exception as e:
        print(f"Unexpected error in analyze_clearance_products: {e}")
        raise Exception(f"Error analyzing clearance candidates: {str(e)}")
