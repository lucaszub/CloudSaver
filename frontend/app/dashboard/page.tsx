import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

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
  },
  {
    id: 2,
    date: "2025-06-01",
    resource: "Azure SQL Database",
    usage: 50,
    unitCost: 0.25,
    totalCost: 12.5,
    budget: 15,
    costStatus: "Within Budget",
  },
  {
    id: 3,
    date: "2025-06-01",
    resource: "Blob Storage",
    usage: 500,
    unitCost: 0.02,
    totalCost: 10,
    budget: 8,
    costStatus: "Over Budget",
  },
];

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <h1 className="text-2xl font-bold mb-6 px-4 lg:px-6">
              Cloud Cost Dashboard
            </h1>
            <div className="px-4 lg:px-6">
              <DataTable data={MOCK_DATA} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
