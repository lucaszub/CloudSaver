"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Ajout du typage des props pour les filtres
interface AzureAreaChartProps {
  resource: string;
  timeRange: string;
  costStatus: string;
  serviceType: string;
  subscription: string;
  resourceGroup: string;
  region: string;
  onFilterChange?: (filters: any) => void;
}

const chartData = [
  {
    date: "2025-06-01",
    resource: "VM - Standard_D2s_v3",
    cost: 14.4,
    budget: 20,
  },
  {
    date: "2025-06-01",
    resource: "Azure SQL Database",
    cost: 12.5,
    budget: 15,
  },
  { date: "2025-06-01", resource: "Blob Storage", cost: 10, budget: 8 },
  {
    date: "2025-06-02",
    resource: "VM - Standard_D2s_v3",
    cost: 13.2,
    budget: 20,
  },
  {
    date: "2025-06-02",
    resource: "Azure SQL Database",
    cost: 13.1,
    budget: 15,
  },
  { date: "2025-06-02", resource: "Blob Storage", cost: 9.5, budget: 8 },
  {
    date: "2025-06-03",
    resource: "VM - Standard_D2s_v3",
    cost: 15.0,
    budget: 20,
  },
  {
    date: "2025-06-03",
    resource: "Azure SQL Database",
    cost: 12.8,
    budget: 15,
  },
  { date: "2025-06-03", resource: "Blob Storage", cost: 8.7, budget: 8 },
];

const serviceTypes = [
  { value: "all", label: "All Services" },
  { value: "vm", label: "Virtual Machine" },
  { value: "storage", label: "Storage" },
  { value: "database", label: "Database" },
  { value: "network", label: "Network" },
];
const subscriptions = [
  { value: "all", label: "All Subscriptions" },
  { value: "prod", label: "Production" },
  { value: "dev", label: "Development" },
  { value: "test", label: "Testing" },
];
const resourceGroups = [
  { value: "all", label: "All Resource Groups" },
  { value: "rg1", label: "Resource Group 1" },
  { value: "rg2", label: "Resource Group 2" },
];
const regions = [
  { value: "all", label: "All Regions" },
  { value: "westeurope", label: "West Europe" },
  { value: "eastus", label: "East US" },
  { value: "francecentral", label: "France Central" },
];
const timeRanges = [
  { value: "month", label: "Month" },
  { value: "week", label: "Week" },
  { value: "day", label: "Day" },
  { value: "custom", label: "Custom Period" },
];

const chartConfig = {
  cost: {
    label: "Actual Cost ($)",
    color: "var(--chart-4)",
  },
  budget: {
    label: "Budget ($)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

// Filters subcomponent for use in dashboard
export function Filters({
  resource,
  setResource,
  timeRange,
  setTimeRange,
  costStatus,
  setCostStatus,
  serviceType,
  setServiceType,
  subscription,
  setSubscription,
  resourceGroup,
  setResourceGroup,
  region,
  setRegion,
}: {
  resource: string;
  setResource: (v: string) => void;
  timeRange: string;
  setTimeRange: (v: string) => void;
  costStatus: string;
  setCostStatus: (v: string) => void;
  serviceType: string;
  setServiceType: (v: string) => void;
  subscription: string;
  setSubscription: (v: string) => void;
  resourceGroup: string;
  setResourceGroup: (v: string) => void;
  region: string;
  setRegion: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Select value={resource} onValueChange={setResource}>
        <SelectTrigger className="w-[140px]" aria-label="Resource">
          <SelectValue placeholder="Resource" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Resources</SelectItem>
          <SelectItem value="vm">VM - Standard_D2s_v3</SelectItem>
          <SelectItem value="sql">Azure SQL Database</SelectItem>
          <SelectItem value="blob">Blob Storage</SelectItem>
        </SelectContent>
      </Select>
      <Select value={timeRange} onValueChange={setTimeRange}>
        <SelectTrigger className="w-[130px]" aria-label="Period">
          <SelectValue placeholder="Period" />
        </SelectTrigger>
        <SelectContent>
          {timeRanges.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={costStatus} onValueChange={setCostStatus}>
        <SelectTrigger className="w-[130px]" aria-label="Cost Status">
          <SelectValue placeholder="Cost Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="within">Within Budget</SelectItem>
          <SelectItem value="over">Over Budget</SelectItem>
        </SelectContent>
      </Select>
      <Select value={serviceType} onValueChange={setServiceType}>
        <SelectTrigger className="w-[150px]" aria-label="Service Type">
          <SelectValue placeholder="Service Type" />
        </SelectTrigger>
        <SelectContent>
          {serviceTypes.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={subscription} onValueChange={setSubscription}>
        <SelectTrigger className="w-[150px]" aria-label="Subscription">
          <SelectValue placeholder="Subscription" />
        </SelectTrigger>
        <SelectContent>
          {subscriptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={resourceGroup} onValueChange={setResourceGroup}>
        <SelectTrigger className="w-[170px]" aria-label="Resource Group">
          <SelectValue placeholder="Resource Group" />
        </SelectTrigger>
        <SelectContent>
          {resourceGroups.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={region} onValueChange={setRegion}>
        <SelectTrigger className="w-[140px]" aria-label="Region">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent>
          {regions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// Le composant reçoit maintenant les filtres en props
export default function AzureAreaChart({
  resource,
  timeRange,
  costStatus,
  serviceType,
  subscription,
  resourceGroup,
  region,
}: AzureAreaChartProps) {
  // Filtrage des données selon les props
  let filteredData = chartData;

  if (resource !== "all") {
    filteredData = filteredData.filter(
      (item) =>
        item.resource ===
        (resource === "vm"
          ? "VM - Standard_D2s_v3"
          : resource === "sql"
          ? "Azure SQL Database"
          : resource === "blob"
          ? "Blob Storage"
          : "")
    );
  }

  if (costStatus !== "all") {
    filteredData = filteredData.filter((item) =>
      costStatus === "within"
        ? item.cost <= item.budget
        : item.cost > item.budget
    );
  }

  if (timeRange !== "90d") {
    const now = new Date("2025-06-03"); // Simule la date actuelle
    let days = 90;
    if (timeRange === "30d") days = 30;
    if (timeRange === "7d") days = 7;
    const minDate = new Date(now);
    minDate.setDate(now.getDate() - days);
    filteredData = filteredData.filter(
      (item) => new Date(item.date) >= minDate
    );
  }

  // Filtering logic (to be adapted to your real data structure)
  if (serviceType !== "all") {
    filteredData = filteredData.filter(
      (item) =>
        item.resource ===
        (serviceType === "vm"
          ? "VM - Standard_D2s_v3"
          : serviceType === "sql"
          ? "Azure SQL Database"
          : serviceType === "blob"
          ? "Blob Storage"
          : "")
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-col gap-2 border-b py-5 sm:flex-row sm:items-center sm:gap-4">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Azure Cloud Resource Cost Over Time</CardTitle>
          <CardDescription>
            Actual cost vs. budget for key Azure resources
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCost" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-cost)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-cost)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBudget" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-budget)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-budget)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="cost"
              type="natural"
              fill="url(#fillCost)"
              stroke="var(--color-cost)"
              stackId="a"
            />
            <Area
              dataKey="budget"
              type="natural"
              fill="url(#fillBudget)"
              stroke="var(--color-budget)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
