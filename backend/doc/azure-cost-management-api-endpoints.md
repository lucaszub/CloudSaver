# Sky Saver Backend – Developer Documentation

This document is intended for developers who want to understand, maintain, or extend the Sky Saver backend project.  
It explains the main Azure Cost Management API endpoints used, the structure of the codebase, and the purpose of each main function.

## Project Structure

- **main.py**  
  The entry point of the backend. Orchestrates calls to cost retrieval functions and prints results.

- **azure_cost.py**  
  Contains all functions for interacting with the Azure Cost Management API (authentication, cost queries by service, resource, group, etc.).

- **config.py**  
  Loads Azure credentials and parameters securely from the `.env` file.

---

## Main Functions and Associated Endpoints

| Python Function               | Azure Endpoint Used                                                        | Description / Main Grouping                 |
| ----------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| `get_cost_data`               | `/subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/query` | Costs by service (`ServiceName`)            |
| `get_daily_costs`             | `/subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/query` | Costs per day (granularity: Daily)          |
| `get_costs_by_resource_group` | `/subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/query` | Costs by resource group                     |
| `get_costs_custom_period`     | `/subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/query` | Costs for a custom period                   |
| `get_costs_by_resource`       | `/subscriptions/{subscriptionId}/providers/Microsoft.CostManagement/query` | Costs by individual resource (`ResourceId`) |

**Note:**  
All these functions use the same Azure Cost Management Query endpoint, but change the JSON payload to filter or group results differently.

---

## Example Usage in `main.py`

```python
token = get_access_token()
print("Costs by service (current month):")
print(json.dumps(get_cost_data(token), indent=2))

print("\nCosts per day:")
print(json.dumps(get_daily_costs(token), indent=2))

# print("\nCosts by resource group:")
# print(json.dumps(get_costs_by_resource_group(token), indent=2))

# print("\nCosts for a custom period:")
# print(json.dumps(get_costs_custom_period(token, "2025-06-01", "2025-06-24"), indent=2))

# print("\nCosts by individual resource:")
# print(json.dumps(get_costs_by_resource(token), indent=2))
```
