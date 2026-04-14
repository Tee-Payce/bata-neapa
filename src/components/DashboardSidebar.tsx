import { Link } from "@tanstack/react-router";
import { LayoutDashboard, DollarSign, Users, Settings, Heart } from "lucide-react";

interface SidebarItem {
  label: string;
  to: string;
  icon: React.ElementType;
}

export function DashboardSidebar({ items, basePath }: { items: SidebarItem[]; basePath: string }) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-card lg:block">
      <div className="sticky top-16 p-4">
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "!bg-accent !text-primary font-semibold" }}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export const creatorSidebarItems: SidebarItem[] = [
  { label: "Overview", to: "/dashboard/creator", icon: LayoutDashboard },
  { label: "Earnings", to: "/dashboard/creator/earnings", icon: DollarSign },
  { label: "Supporters", to: "/dashboard/creator/supporters", icon: Users },
  { label: "Settings", to: "/dashboard/creator/settings", icon: Settings },
];

export const donorSidebarItems: SidebarItem[] = [
  { label: "Overview", to: "/dashboard/donor", icon: LayoutDashboard },
  { label: "My Donations", to: "/dashboard/donor/donations", icon: Heart },
  { label: "Settings", to: "/dashboard/donor/settings", icon: Settings },
];
