import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { mockCreators, mockSupporters } from "@/lib/mock-data";
import { Heart, Users, DollarSign } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/creator/$creatorId")({
  head: () => ({
    meta: [
      { title: "Creator Profile — Bata neapa" },
      { name: "description", content: "Support this creator on Bata neapa." },
    ],
  }),
  component: CreatorProfilePage,
});

function CreatorProfilePage() {
  const { creatorId } = Route.useParams();
  const creator = mockCreators.find((c) => c.id === creatorId) || mockCreators[0];
  const progress = Math.min((creator.raised / creator.goal) * 100, 100);
  const [amount, setAmount] = useState("10");
  const [paymentMethod, setPaymentMethod] = useState("ecocash");
  const [anonymous, setAnonymous] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Banner */}
      <div className="relative h-48 overflow-hidden rounded-xl bg-muted sm:h-64">
        <img src={creator.image} alt={creator.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      </div>

      <div className="relative -mt-16 ml-6 flex items-end gap-4 sm:ml-8">
        <div className="h-28 w-28 overflow-hidden rounded-2xl border-4 border-card bg-card shadow-lg sm:h-32 sm:w-32">
          <img src={creator.image} alt={creator.name} className="h-full w-full object-cover" />
        </div>
        <div className="mb-2">
          <h1 className="text-2xl font-bold text-card sm:text-3xl drop-shadow-lg">{creator.name}</h1>
          <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground mt-1">{creator.category}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-5">
        {/* Main */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold text-card-foreground">About</h2>
            <p className="mt-2 text-muted-foreground">{creator.bio}</p>
          </div>

          {/* Progress */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-card-foreground">Funds Raised</h2>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="font-semibold text-foreground">${creator.raised.toLocaleString()}</span>
              <span className="text-muted-foreground">of ${creator.goal.toLocaleString()}</span>
            </div>
          </div>

          {/* Supporters */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">Recent Supporters</h2>
            <div className="space-y-3">
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

        {/* Support sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-20 rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold text-card-foreground">Support {creator.name}</h2>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Amount ($)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  min="1"
                />
                <div className="mt-2 flex gap-2">
                  {["5", "10", "25", "50", "100"].map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className={`flex-1 rounded-lg border py-1.5 text-sm font-medium transition-all ${
                        amount === a ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Payment Method</label>
                <div className="mt-1.5 grid grid-cols-2 gap-2">
                  {[
                    { id: "ecocash", label: "EcoCash" },
                    { id: "card", label: "Visa/MC" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`rounded-lg border py-2.5 text-sm font-medium transition-all ${
                        paymentMethod === m.id ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                />
                <span className="text-sm text-foreground">Donate anonymously</span>
              </label>

              <Button className="w-full" size="lg">
                <Heart className="h-4 w-4" /> Support Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
