"use client";
import * as React from "react";
import { DataTable } from "@/components/data-table";

export interface CostTableItem {
  serviceName: string;
  totalCost: number;
  currency: string;
}

export function ChartAreaAzureCostTable({
  rows,
}: {
  rows: [number, number, string, string][];
}) {
  // Aggregate cost by service name
  const costMap: Record<string, { total: number; currency: string }> = {};
  rows.forEach(([cost, _date, serviceName, currency]) => {
    if (!costMap[serviceName]) costMap[serviceName] = { total: 0, currency };
    costMap[serviceName].total += cost;
  });
  // Convert to array and sort descending by total cost
  const data: CostTableItem[] = Object.entries(costMap)
    .map(([serviceName, { total, currency }]) => ({
      serviceName,
      totalCost: total,
      currency,
    }))
    .sort((a, b) => b.totalCost - a.totalCost)
    .slice(0, 10);

  // Table columns similar to dashboard (no cell function, just raw value)
  const columns = [
    { accessorKey: "serviceName", header: "Resource" },
    { accessorKey: "totalCost", header: "Total Cost (€)" },
    { accessorKey: "currency", header: "Currency" },
  ];

  // Add an id property to each row for DataTable compatibility
  const dataWithId = data.map((row, idx) => ({
    ...row,
    id: row.serviceName || idx,
  }));

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">
        Top 10 Most Expensive Resources
      </h2>
      <DataTable data={dataWithId} columns={columns} />
    </div>
  );
}
