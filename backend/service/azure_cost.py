import requests
import json
from msal import ConfidentialClientApplication
from service.config import CLIENT_ID, CLIENT_SECRET, TENANT_ID, SUBSCRIPTION_ID
import os
from service.mock_cost_data import get_mock_cost_data

AUTHORITY = f"https://login.microsoftonline.com/{TENANT_ID}"
SCOPE = ["https://management.azure.com/.default"]
COST_MANAGEMENT_API_URL = (
    f"https://management.azure.com/subscriptions/{SUBSCRIPTION_ID}/providers/Microsoft.CostManagement/query?api-version=2023-03-01"
)

PAYLOAD = {
    "type": "ActualCost",
    "timeframe": "MonthToDate",
    "dataset": {
        "granularity": "None",
        "aggregation": {
            "totalCost": {
                "name": "PreTaxCost",
                "function": "Sum"
            }
        },
        "grouping": [
            {
                "type": "Dimension",
                "name": "ServiceName"
            }
        ]
    }
}

MOCK_MODE = os.environ.get('MOCK_MODE', 'false').lower() == 'true'

def get_access_token():
    app = ConfidentialClientApplication(
        client_id=CLIENT_ID,
        client_credential=CLIENT_SECRET,
        authority=AUTHORITY
    )
    result = app.acquire_token_for_client(scopes=SCOPE)
    if "access_token" in result:
        return result["access_token"]
    else:
        raise Exception(result.get("error_description"))

def get_cost_data(access_token=None):
    if MOCK_MODE:
        return get_mock_cost_data()
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    response = requests.post(COST_MANAGEMENT_API_URL, headers=headers, json=PAYLOAD)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API : {response.status_code} - {response.text}")

def get_daily_costs(access_token=None):
    if MOCK_MODE:
        from service.mock_cost_data import get_mock_daily_costs
        return get_mock_daily_costs()
    daily_payload = PAYLOAD.copy()
    daily_payload["dataset"] = daily_payload["dataset"].copy()
    daily_payload["dataset"]["granularity"] = "Daily"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    response = requests.post(COST_MANAGEMENT_API_URL, headers=headers, json=daily_payload)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API (daily): {response.status_code} - {response.text}")

def get_costs_by_resource_group(access_token=None):
    if MOCK_MODE:
        from service.mock_cost_data import get_mock_costs_by_resource_group
        return get_mock_costs_by_resource_group()
    rg_payload = PAYLOAD.copy()
    rg_payload["dataset"] = rg_payload["dataset"].copy()
    rg_payload["dataset"]["grouping"] = [{"type": "Dimension", "name": "ResourceGroupName"}]
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    response = requests.post(COST_MANAGEMENT_API_URL, headers=headers, json=rg_payload)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API (resource group): {response.status_code} - {response.text}")

def get_costs_custom_period(access_token=None, start_date=None, end_date=None):
    if MOCK_MODE:
        from service.mock_cost_data import get_mock_costs_custom_period
        return get_mock_costs_custom_period()
    custom_payload = PAYLOAD.copy()
    custom_payload["timeframe"] = "Custom"
    custom_payload["timePeriod"] = {
        "from": start_date,  # format 'YYYY-MM-DD'
        "to": end_date       # format 'YYYY-MM-DD'
    }
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    response = requests.post(COST_MANAGEMENT_API_URL, headers=headers, json=custom_payload)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API (custom period): {response.status_code} - {response.text}")

def get_costs_by_resource(access_token=None):
    if MOCK_MODE:
        from service.mock_cost_data import get_mock_costs_by_resource
        return get_mock_costs_by_resource()
    resource_payload = PAYLOAD.copy()
    resource_payload["dataset"] = resource_payload["dataset"].copy()
    resource_payload["dataset"]["grouping"] = [{"type": "Dimension", "name": "ResourceId"}]
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    response = requests.post(COST_MANAGEMENT_API_URL, headers=headers, json=resource_payload)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API (resource): {response.status_code} - {response.text}")

