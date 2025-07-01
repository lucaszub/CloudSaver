from service.azure_cost import (
    get_cost_data,
    get_access_token,
    get_daily_costs,
    get_costs_by_resource_group,
    get_costs_custom_period,
    get_costs_by_resource
)
import json

token = get_access_token()

print("=== Coûts par service ===")
cost_data = get_cost_data(access_token=token)
print(json.dumps(cost_data, indent=2))

print("\n=== Coûts par jour ===")
daily_cost = get_daily_costs(access_token=token)
print(json.dumps(daily_cost, indent=2))

print("\n=== Coûts par groupe de ressources ===")
group_cost = get_costs_by_resource_group(access_token=token)
print(json.dumps(group_cost, indent=2))

print("\n=== Coûts sur une période personnalisée ===")
custom_cost = get_costs_custom_period(access_token=token, start_date="2025-05-01", end_date="2025-06-10")
print(json.dumps(custom_cost, indent=2))

print("\n=== Coûts par ressource ===")
resource_cost = get_costs_by_resource(access_token=token)
print(json.dumps(resource_cost, indent=2))