import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar, creatorSidebarItems } from "@/components/DashboardSidebar";

export const Route = createFileRoute("/dashboard/creator")({
  component: CreatorDashboardLayout,
});

function CreatorDashboardLayout() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar items={creatorSidebarItems} basePath="/dashboard/creator" />
      <main className="flex-1 p-6 sm:p-8">
        <Outlet />
      </main>
    </div>
  );
}
