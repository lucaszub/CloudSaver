// moved from components/chart-area-azure-cost.tsx
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
];

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
          <SelectItem value="month">Month</SelectItem>
          <SelectItem value="week">Week</SelectItem>
          <SelectItem value="day">Day</SelectItem>
          <SelectItem value="custom">Custom Period</SelectItem>
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
          <SelectItem value="all">All Services</SelectItem>
          <SelectItem value="vm">Virtual Machine</SelectItem>
          <SelectItem value="storage">Storage</SelectItem>
          <SelectItem value="database">Database</SelectItem>
          <SelectItem value="network">Network</SelectItem>
        </SelectContent>
      </Select>
      <Select value={subscription} onValueChange={setSubscription}>
        <SelectTrigger className="w-[150px]" aria-label="Subscription">
          <SelectValue placeholder="Subscription" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Subscriptions</SelectItem>
          <SelectItem value="prod">Production</SelectItem>
          <SelectItem value="dev">Development</SelectItem>
          <SelectItem value="test">Testing</SelectItem>
        </SelectContent>
      </Select>
      <Select value={resourceGroup} onValueChange={setResourceGroup}>
        <SelectTrigger className="w-[170px]" aria-label="Resource Group">
          <SelectValue placeholder="Resource Group" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Resource Groups</SelectItem>
          <SelectItem value="rg1">Resource Group 1</SelectItem>
          <SelectItem value="rg2">Resource Group 2</SelectItem>
        </SelectContent>
      </Select>
      <Select value={region} onValueChange={setRegion}>
        <SelectTrigger className="w-[140px]" aria-label="Region">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Regions</SelectItem>
          <SelectItem value="westeurope">West Europe</SelectItem>
          <SelectItem value="eastus">East US</SelectItem>
          <SelectItem value="francecentral">France Central</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
