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

export default function AzureAreaChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  // For demo, just show all data
  const filteredData = chartData;

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Azure Cloud Resource Cost Over Time</CardTitle>
          <CardDescription>
            Actual cost vs. budget for key Azure resources
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
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
