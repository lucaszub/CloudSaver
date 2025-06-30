"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import AzureAreaChart, {
  Filters as AzureAreaChartFilters,
} from "@/components/chart-area-azure-cost";
import { SectionCards } from "@/components/cards/section-cards-azure-cost";

// New mock data for Azure cost control
const MOCK_DATA = [
  {
    id: 1,
    date: "2025-06-01",
    resource: "VM - Standard_D2s_v3",
    usage: 120,
    unitCost: 0.12,
    totalCost: 14.4,
    budget: 20,
    costStatus: "Within Budget",
    serviceType: "Virtual Machine",
    subscription: "Production",
    resourceGroup: "rg-infra-prod",
    region: "West Europe",
  },
  {
    id: 2,
    date: "2025-06-01",
    resource: "Azure SQL Database",
    usage: 250,
    unitCost: 0.06,
    totalCost: 15.0,
    budget: 18,
    costStatus: "Within Budget",
    serviceType: "Database",
    subscription: "Production",
    resourceGroup: "rg-data-prod",
    region: "West Europe",
  },
  {
    id: 3,
    date: "2025-06-01",
    resource: "Blob Storage",
    usage: 2000,
    unitCost: 0.005,
    totalCost: 10.0,
    budget: 8,
    costStatus: "Over Budget",
    serviceType: "Storage",
    subscription: "Development",
    resourceGroup: "rg-storage-dev",
    region: "East US",
  },
  {
    id: 4,
    date: "2025-06-01",
    resource: "Azure Load Balancer",
    usage: 30,
    unitCost: 0.15,
    totalCost: 4.5,
    budget: 6,
    costStatus: "Within Budget",
    serviceType: "Network",
    subscription: "Testing",
    resourceGroup: "rg-network-test",
    region: "France Central",
  },
  {
    id: 5,
    date: "2025-06-01",
    resource: "Azure App Service",
    usage: 60,
    unitCost: 0.2,
    totalCost: 12.0,
    budget: 15,
    costStatus: "Within Budget",
    serviceType: "App Service",
    subscription: "Production",
    resourceGroup: "rg-app-prod",
    region: "West Europe",
  },
];

export default function DashboardPage() {
  // State for each filter
  const [resource, setResource] = React.useState("all");
  const [subscription, setSubscription] = React.useState("all");
  const [timeRange, setTimeRange] = React.useState("month");
  const [costStatus, setCostStatus] = React.useState("all");
  const [serviceType, setServiceType] = React.useState("all");
  const [resourceGroup, setResourceGroup] = React.useState("all");
  const [region, setRegion] = React.useState("all");

  // Filter MOCK_DATA for the table (optional, adapt as needed)
  const filteredTableData = MOCK_DATA.filter((item) => {
    const resourceMatch =
      resource === "all" ||
      item.resource ===
        (resource === "vm"
          ? "VM - Standard_D2s_v3"
          : resource === "sql"
          ? "Azure SQL Database"
          : resource === "blob"
          ? "Blob Storage"
          : "");
    const costStatusMatch =
      costStatus === "all" ||
      (costStatus === "within"
        ? item.costStatus === "Within Budget"
        : item.costStatus === "Over Budget");
    // Subscription, serviceType, resourceGroup, region are not in MOCK_DATA, so ignored here
    return resourceMatch && costStatusMatch;
  });

  return (
    <div className="h-full flex flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 py-4 md:gap-2 md:py-6">
            <h1 className="text-2xl font-bold  px-4 lg:px-6">
              Cloud Cost Dashboard
            </h1>
            <div className="px-4 lg:px-6">
              <AzureAreaChartFilters
                resource={resource}
                setResource={setResource}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
                costStatus={costStatus}
                setCostStatus={setCostStatus}
                serviceType={serviceType}
                setServiceType={setServiceType}
                subscription={subscription}
                setSubscription={setSubscription}
                resourceGroup={resourceGroup}
                setResourceGroup={setResourceGroup}
                region={region}
                setRegion={setRegion}
              />
            </div>

            <SectionCards />

            <div className="px-4 lg:px-6 gap-10">
              <AzureAreaChart
                resource={resource}
                timeRange={timeRange}
                costStatus={costStatus}
                serviceType={serviceType}
                subscription={subscription}
                resourceGroup={resourceGroup}
                region={region}
              />
            </div>
            <div className="h-10" />
            {/* Add vertical space between chart and table */}
            <div className="px-4 lg:px-6">
              <DataTable data={filteredTableData} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
