import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* <AppSidebar /> */}
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </main>
    </div>
  );
}
