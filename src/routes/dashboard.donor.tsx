import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar, donorSidebarItems } from "@/components/DashboardSidebar";

export const Route = createFileRoute("/dashboard/donor")({
  component: DonorDashboardLayout,
});

function DonorDashboardLayout() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar items={donorSidebarItems} basePath="/dashboard/donor" />
      <main className="flex-1 p-6 sm:p-8">
        <Outlet />
      </main>
    </div>
  );
}
