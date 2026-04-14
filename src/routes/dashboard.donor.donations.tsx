import { createFileRoute } from "@tanstack/react-router";
import { mockDonations } from "@/lib/mock-data";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/dashboard/donor/donations")({
  component: DonorDonations,
});

function DonorDonations() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">My Donations</h1>
      <p className="mt-1 text-muted-foreground">Your contribution history</p>

      <div className="mt-6 rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Creator</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockDonations.map((d) => (
              <tr key={d.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Heart className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{d.creator}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-foreground">${d.amount}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{d.date}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-chart-3/15 px-2.5 py-0.5 text-xs font-medium text-chart-3">
                    {d.anonymous ? "Anonymous" : "Public"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
