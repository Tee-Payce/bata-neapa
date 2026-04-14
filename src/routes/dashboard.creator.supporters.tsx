import { createFileRoute } from "@tanstack/react-router";
import { mockSupporters } from "@/lib/mock-data";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/dashboard/creator/supporters")({
  component: CreatorSupporters,
});

function CreatorSupporters() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">Supporters</h1>
      <p className="mt-1 text-muted-foreground">People who believe in your work</p>

      <div className="mt-6 rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Supporter</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockSupporters.map((s) => (
              <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Heart className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{s.anonymous ? "Anonymous" : s.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-foreground">${s.amount}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{s.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
