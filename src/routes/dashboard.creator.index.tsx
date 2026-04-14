import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Users, TrendingUp, Heart } from "lucide-react";
import { mockSupporters } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/creator/")({
  component: CreatorOverview,
});

function CreatorOverview() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">Creator Dashboard</h1>
      <p className="mt-1 text-muted-foreground">Welcome back! Here's your overview.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total Raised", value: "$2,400", icon: DollarSign, color: "text-primary" },
          { label: "Supporters", value: "47", icon: Users, color: "text-gold" },
          { label: "This Month", value: "$650", icon: TrendingUp, color: "text-chart-3" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <p className="mt-2 text-2xl font-bold text-card-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-lg font-semibold text-card-foreground">Recent Donations</h2>
        <div className="mt-4 space-y-3">
          {mockSupporters.map((s) => (
            <div key={s.id} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{s.anonymous ? "Anonymous" : s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.date}</p>
                </div>
              </div>
              <span className="font-semibold text-foreground">${s.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
