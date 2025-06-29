import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import AzureAreaChart from "@/components/chart-area-azure-cost";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <div className="flex flex-col gap-2 py-4 md:gap-2 md:py-6">
            <h1 className="text-2xl font-bold  px-4 lg:px-6">
              Cloud Cost Dashboard
            </h1>
            <div> </div>
            <div className="flex flex-row justify-end gap-4 px-4 lg:px-6 mb-4">
              {/* Azure cost filters */}
              <Select>
                <SelectTrigger
                  className="w-[160px] rounded-lg"
                  aria-label="Select resource"
                >
                  <SelectValue placeholder="Resource" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all" className="rounded-lg">
                    All Resources
                  </SelectItem>
                  <SelectItem value="vm" className="rounded-lg">
                    VM - Standard_D2s_v3
                  </SelectItem>
                  <SelectItem value="sql" className="rounded-lg">
                    Azure SQL Database
                  </SelectItem>
                  <SelectItem value="blob" className="rounded-lg">
                    Blob Storage
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="w-[160px] rounded-lg"
                  aria-label="Select subscription"
                >
                  <SelectValue placeholder="Subscription" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all" className="rounded-lg">
                    All Subscriptions
                  </SelectItem>
                  <SelectItem value="prod" className="rounded-lg">
                    Production
                  </SelectItem>
                  <SelectItem value="dev" className="rounded-lg">
                    Development
                  </SelectItem>
                  <SelectItem value="test" className="rounded-lg">
                    Testing
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="w-[160px] rounded-lg"
                  aria-label="Select time range"
                >
                  <SelectValue placeholder="Time Range" />
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
                  <SelectItem value="custom" className="rounded-lg">
                    Custom Range
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="w-[160px] rounded-lg"
                  aria-label="Select cost status"
                >
                  <SelectValue placeholder="Cost Status" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all" className="rounded-lg">
                    All
                  </SelectItem>
                  <SelectItem value="within" className="rounded-lg">
                    Within Budget
                  </SelectItem>
                  <SelectItem value="over" className="rounded-lg">
                    Over Budget
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="px-4 lg:px-6 gap-10">
              <AzureAreaChart />
            </div>
            <div className="h-10" />{" "}
            {/* Ajoute un espace vertical entre le chart et le tableau */}
            <div className="px-4 lg:px-6">
              <DataTable data={MOCK_DATA} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
