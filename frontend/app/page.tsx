import ChartAreaAzureCostFetch from "@/components/charts/chart-area-azure-cost-fetch";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <div className="h-full flex flex-col">
      <SiteHeader />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Azure Cost API Area Chart</h1>
        <ChartAreaAzureCostFetch />
      </div>
    </div>
  );
}
