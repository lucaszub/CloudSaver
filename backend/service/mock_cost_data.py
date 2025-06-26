def get_mock_cost_data():
    return {
        "@odata.context": "https://management.azure.com/$metadata#Microsoft.CostManagement/Query/$entity",
        "columns": [
            {"name": "ServiceName", "type": "String"},
            {"name": "PreTaxCost", "type": "Number"}
        ],
        "rows": [
            ["Virtual Machines", 97.6],
            ["App Service", 32.8],
            ["Storage", 14.0],
            ["SQL Database", 20.0],
            ["Cosmos DB", 8.5]
        ],
        "id": None
    }

def get_mock_daily_costs():
    return {
        "@odata.context": "https://management.azure.com/$metadata#Microsoft.CostManagement/Query/$entity",
        "columns": [
            {"name": "PreTaxCost", "type": "Number"},
            {"name": "UsageDate", "type": "String"},
            {"name": "ServiceName", "type": "String"}
        ],
        "rows": [
            [3.5, "2025-06-01", "Virtual Machines"],
            [1.2, "2025-06-01", "App Service"],
            [0.7, "2025-06-01", "Storage"],
            [3.7, "2025-06-02", "Virtual Machines"],
            [1.3, "2025-06-02", "App Service"],
            [0.8, "2025-06-02", "Storage"]
        ],
        "id": None
    }

def get_mock_costs_by_resource_group():
    return {
        "@odata.context": "https://management.azure.com/$metadata#Microsoft.CostManagement/Query/$entity",
        "columns": [
            {"name": "ResourceGroupName", "type": "String"},
            {"name": "PreTaxCost", "type": "Number"}
        ],
        "rows": [
            ["ProdRG", 60.5],
            ["DevRG", 59.2],
            ["TestRG", 24.2]
        ],
        "id": None
    }

def get_mock_costs_custom_period():
    return {
        "@odata.context": "https://management.azure.com/$metadata#Microsoft.CostManagement/Query/$entity",
        "columns": [
            {"name": "ServiceName", "type": "String"},
            {"name": "PreTaxCost", "type": "Number"},
            {"name": "UsageDate", "type": "String"}
        ],
        "rows": [
            ["Virtual Machines", 10.0, "2025-06-01"],
            ["App Service", 5.0, "2025-06-01"],
            ["Storage", 2.0, "2025-06-01"],
            ["Virtual Machines", 12.0, "2025-06-02"],
            ["App Service", 6.0, "2025-06-02"],
            ["Storage", 2.5, "2025-06-02"]
        ],
        "id": None
    }

def get_mock_costs_by_resource():
    return {
        "@odata.context": "https://management.azure.com/$metadata#Microsoft.CostManagement/Query/$entity",
        "columns": [
            {"name": "ResourceId", "type": "String"},
            {"name": "PreTaxCost", "type": "Number"}
        ],
        "rows": [
            ["/subscriptions/mocksub/resourceGroups/ProdRG/providers/Microsoft.Compute/virtualMachines/vm1", 42.5],
            ["/subscriptions/mocksub/resourceGroups/ProdRG/providers/Microsoft.Web/sites/app1", 12.3],
            ["/subscriptions/mocksub/resourceGroups/ProdRG/providers/Microsoft.Storage/storageAccounts/storage1", 5.7],
            ["/subscriptions/mocksub/resourceGroups/DevRG/providers/Microsoft.Compute/virtualMachines/vm2", 40.1],
            ["/subscriptions/mocksub/resourceGroups/DevRG/providers/Microsoft.Web/sites/app2", 13.0],
            ["/subscriptions/mocksub/resourceGroups/DevRG/providers/Microsoft.Storage/storageAccounts/storage2", 6.1]
        ],
        "id": None
    }
