import { createFileRoute } from "@tanstack/react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export const Route = createFileRoute("/dashboard/creator/earnings")({
  component: CreatorEarnings,
});

const earningsData = [
  { month: "Oct", amount: 320 },
  { month: "Nov", amount: 450 },
  { month: "Dec", amount: 280 },
  { month: "Jan", amount: 610 },
  { month: "Feb", amount: 520 },
  { month: "Mar", amount: 650 },
];

function CreatorEarnings() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">Earnings</h1>
      <p className="mt-1 text-muted-foreground">Track your income over time</p>

      <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-lg font-semibold text-card-foreground mb-4">Monthly Earnings</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} tickFormatter={(v) => `$${v}`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                formatter={(value: number) => [`$${value}`, "Earned"]}
              />
              <Bar dataKey="amount" fill="var(--primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
