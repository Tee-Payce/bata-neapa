import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Users, Heart } from "lucide-react";
import { mockDonations } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/donor/")({
  component: DonorOverview,
});

function DonorOverview() {
  const totalDonated = mockDonations.reduce((s, d) => s + d.amount, 0);

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">Donor Dashboard</h1>
      <p className="mt-1 text-muted-foreground">Thank you for supporting creators!</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Donated</span>
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
          <p className="mt-2 text-2xl font-bold text-card-foreground">${totalDonated}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Creators Supported</span>
            <Users className="h-5 w-5 text-gold" />
          </div>
          <p className="mt-2 text-2xl font-bold text-card-foreground">{mockDonations.length}</p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-lg font-semibold text-card-foreground">Recent Donations</h2>
        <div className="mt-4 space-y-3">
          {mockDonations.map((d) => (
            <div key={d.id} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{d.creator}</p>
                  <p className="text-xs text-muted-foreground">{d.date} {d.anonymous && "• Anonymous"}</p>
                </div>
              </div>
              <span className="font-semibold text-foreground">${d.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
