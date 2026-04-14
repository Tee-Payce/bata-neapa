import { createFileRoute } from "@tanstack/react-router";
import { Users, CreditCard, Zap, Shield, Smartphone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Bata neapa" },
      { name: "description", content: "Learn how to support Zimbabwean creators on Bata neapa." },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">How Bata neapa Works</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Supporting local creators has never been easier. Here's how you can make a difference.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        {[
          { step: "1", icon: Users, title: "Discover Creators", desc: "Browse through talented Zimbabwean creators across music, art, tech, and storytelling. Use filters to find creators in your favorite category." },
          { step: "2", icon: CreditCard, title: "Choose Your Amount", desc: "Pick any amount you'd like to contribute. Whether it's $1 or $100, every contribution matters and goes directly to the creator." },
          { step: "3", icon: Zap, title: "Pay Instantly", desc: "Use EcoCash, Visa, or Mastercard to send your support in seconds. Your transaction is encrypted and secure." },
        ].map((s) => (
          <div key={s.step} className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl gradient-gold text-gold-foreground text-3xl font-bold shadow-lg">
              {s.step}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="mt-24">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Why Choose Us</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Shield, title: "100% Secure", desc: "Bank-grade encryption protects every transaction." },
            { icon: Smartphone, title: "Mobile-First", desc: "Works perfectly on any device, optimized for EcoCash." },
            { icon: Heart, title: "Community-Driven", desc: "Built by Zimbabweans, for Zimbabweans." },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <b.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-card-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" asChild>
          <Link to="/register">Start Supporting Today</Link>
        </Button>
      </div>
    </div>
  );
}
