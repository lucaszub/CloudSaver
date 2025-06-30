// moved from components/chart-area-azure-cost-client.tsx
"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export interface ChartDataItem {
  date: string;
  cost: number;
}

export default function ChartAreaAzureCostClient({
  chartData,
}: {
  chartData: ChartDataItem[];
}) {
  const chartConfig = {
    cost: {
      label: "Actual Cost (€)",
      color: "var(--chart-4)",
    },
    budget: {
      label: "Budget (€)",
      color: "var(--chart-1)",
    },
  };

  return (
    <Card>
      <CardHeader className="flex flex-col gap-2 border-b py-5 sm:flex-row sm:items-center sm:gap-4">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Azure Cloud Daily Cost</CardTitle>
          <CardDescription>Actual cost per day (API live)</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillCost" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-4)"
                  stopOpacity={0.8}
                />
                <stop offset="95%" stopColor="var(--chart-4)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                // Ensure consistent date formatting for SSR/CSR
                if (
                  typeof value === "string" &&
                  value.length === 8 &&
                  /^\d+$/.test(value)
                ) {
                  // If value is like 20250606, format as YYYY-MM-DD
                  return (
                    value.slice(0, 4) +
                    "-" +
                    value.slice(4, 6) +
                    "-" +
                    value.slice(6, 8)
                  );
                }
                return value;
              }}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Area
              type="monotone"
              dataKey="cost"
              stroke={chartConfig.cost.color}
              fill="url(#fillCost)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
