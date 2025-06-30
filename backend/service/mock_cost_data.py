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
        "id": "subscriptions/bac27588-84cf-4081-85ac-370727fde459/providers/Microsoft.CostManagement/query/40f703b5-8471-4736-abba-10dd56a76e13",
        "name": "40f703b5-8471-4736-abba-10dd56a76e13",
        "type": "Microsoft.CostManagement/query",
        "location": None,
        "sku": None,
        "eTag": None,
        "properties": {
            "nextLink": None,
            "columns": [
                {"name": "PreTaxCost", "type": "Number"},
                {"name": "UsageDate", "type": "Number"},
                {"name": "ServiceName", "type": "String"},
                {"name": "Currency", "type": "String"}
            ],
            "rows": [
                [306.11, 20250606, "Microsoft Fabric", "EUR"],
                [101.11, 20250607, "Microsoft Fabric", "EUR"],
                [201.11, 20250608, "Microsoft Fabric", "EUR"],
                [629.68, 20250609, "Azure Data Factory v2", "EUR"],
                [0, 20250609, "Bandwidth", "EUR"],
                [111.11, 20250609, "Microsoft Fabric", "EUR"],
                [50.68, 20250609, "Storage", "EUR"],
                [710.27, 20250610, "Azure Data Factory v2", "EUR"],
                [970.08, 20250610, "Azure Databricks", "EUR"],
                [223.85, 20250610, "Azure Synapse Analytics", "EUR"],
                [0.01, 20250610, "Bandwidth", "EUR"],
                [111.11, 20250610, "Microsoft Fabric", "EUR"],
                [481.18, 20250610, "NAT Gateway", "EUR"],
                [118.88, 20250610, "Storage", "EUR"],
                [297.91, 20250610, "Virtual Machines", "EUR"],
                [50.97, 20250610, "Virtual Network", "EUR"]
            ]
        }
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
