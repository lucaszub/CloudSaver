// app/page.tsx
import ChartAreaAzureCostClient from "@/components/charts/chart-area-azure-cost-client";

export interface CostItem {
  id: string;
  name: string;
  type: string;
  location: string | null;
  sku: string | null;
  eTag: string | null;
  properties: {
    nextLink: string | null;
    columns: { name: string; type: string }[];
    rows: [number, number, string, string][]; // PreTaxCost, UsageDate, ServiceName, Currency
  };
  "@odata.context"?: string;
}

// Fetch and transform data for the area chart
export default async function ChartAreaAzureCostFetch() {
  try {
    const response = await fetch("http://127.0.0.1:8001/api/costs/daily");
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    const data = (await response.json()) as CostItem;
    if (!data || !data.properties || !Array.isArray(data.properties.rows)) {
      throw new Error("Invalid API response: missing or malformed data");
    }

    // Transform rows to { date, cost } and sum by day
    const dayMap: Record<string, number> = {};
    data.properties.rows.forEach((row) => {
      const cost = row[0];
      const usageDate = row[1];
      const dateStr = usageDate.toString();
      const date = `${dateStr.slice(0, 4)}-${dateStr.slice(
        4,
        6
      )}-${dateStr.slice(6, 8)}`;
      if (!dayMap[date]) dayMap[date] = 0;
      dayMap[date] += cost;
    });
    const chartData = Object.entries(dayMap).map(([date, cost]) => ({
      date,
      cost,
    }));
    chartData.sort((a, b) => a.date.localeCompare(b.date));

    return <ChartAreaAzureCostClient chartData={chartData} />;
  } catch (error: any) {
    return (
      <div className="p-4 text-red-600 bg-red-50 border border-red-200 rounded">
        <strong>Erreur lors du chargement des coûts Azure :</strong>
        <div className="mt-1 text-sm">{error.message || String(error)}</div>
      </div>
    );
  }
}
