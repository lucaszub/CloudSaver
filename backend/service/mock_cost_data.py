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
    # Generate 30 days of realistic Azure cost data for multiple services
    import random
    from datetime import datetime, timedelta

    start_date = datetime(2025, 6, 1)
    services = [
        "Virtual Machines", "App Service", "Storage", "SQL Database", "Cosmos DB",
        "Azure Data Factory v2", "Azure Databricks", "Azure Synapse Analytics",
        "NAT Gateway", "Virtual Network", "Bandwidth", "Microsoft Fabric"
    ]
    currency = "EUR"
    rows = []
    random.seed(42)
    for i in range(30):
        day = start_date + timedelta(days=i)
        usage_date = int(day.strftime("%Y%m%d"))
        # Each day, generate a random cost for each service (simulate usage patterns)
        for service in services:
            # Simulate realistic cost ranges per service
            if service == "Virtual Machines":
                cost = round(random.uniform(100, 400), 2)
            elif service == "App Service":
                cost = round(random.uniform(20, 80), 2)
            elif service == "Storage":
                cost = round(random.uniform(10, 50), 2)
            elif service == "SQL Database":
                cost = round(random.uniform(15, 60), 2)
            elif service == "Cosmos DB":
                cost = round(random.uniform(5, 30), 2)
            elif service == "Azure Data Factory v2":
                cost = round(random.uniform(50, 200), 2)
            elif service == "Azure Databricks":
                cost = round(random.uniform(100, 500), 2)
            elif service == "Azure Synapse Analytics":
                cost = round(random.uniform(50, 250), 2)
            elif service == "NAT Gateway":
                cost = round(random.uniform(20, 100), 2)
            elif service == "Virtual Network":
                cost = round(random.uniform(5, 30), 2)
            elif service == "Bandwidth":
                cost = round(random.uniform(0, 5), 2)
            elif service == "Microsoft Fabric":
                cost = round(random.uniform(50, 300), 2)
            else:
                cost = round(random.uniform(1, 10), 2)
            # Add some zero-cost days for Bandwidth to simulate free usage
            if service == "Bandwidth" and random.random() < 0.3:
                cost = 0.0
            rows.append([cost, usage_date, service, currency])
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
            "rows": rows
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
