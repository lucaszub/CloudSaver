// DataTable columns for Azure cost control dashboard
export const columns = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "resource",
    header: "Resource",
  },
  {
    accessorKey: "usage",
    header: "Usage",
  },
  {
    accessorKey: "unitCost",
    header: "Unit Cost ($)",
  },
  {
    accessorKey: "totalCost",
    header: "Total Cost ($)",
  },
  {
    accessorKey: "budget",
    header: "Budget ($)",
  },
  {
    accessorKey: "costStatus",
    header: "Cost Status",
  },
];
