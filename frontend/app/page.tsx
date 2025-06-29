import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import data from "./dashboard/data.json";

// Define columns for the data.json structure
const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "header", header: "Header" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "target", header: "Target" },
  { accessorKey: "limit", header: "Limit" },
  { accessorKey: "reviewer", header: "Reviewer" },
];

export default function DashboardTemplatePage() {
  return (
    <div className="h-full flex flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}
