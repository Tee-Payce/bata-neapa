import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CreatorCard } from "@/components/CreatorCard";
import { mockCreators } from "@/lib/mock-data";
import { Heart, Shield, Smartphone, ArrowRight, Users, Zap, CreditCard } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bata neapa — Support Local Creators. Empower Zimbabwe." },
      { name: "description", content: "Crowdfund your favorite Zimbabwean artists, developers, and storytellers." },
      { property: "og:title", content: "Bata neapa — Support Local Creators" },
      { property: "og:description", content: "Crowdfund your favorite Zimbabwean artists, developers, and storytellers." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <img src={heroPattern} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-overlay" width={1920} height={1080} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.75_0.12_85/0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80 mb-6">
              <Heart className="h-4 w-4" />
              <span>Zimbabwe's crowdfunding platform</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Support Local Creators.{" "}
              <span className="text-gold">Empower Zimbabwe.</span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80 sm:text-xl max-w-lg">
              Crowdfund your favorite artists, developers, and storytellers. Every contribution makes a difference.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="xl" variant="gold" asChild>
                <Link to="/discover">
                  Support a Creator <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" asChild>
                <Link to="/register">Become a Creator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Bata neapa?</h2>
            <p className="mt-3 text-muted-foreground">Simple, secure, and built for Zimbabwe</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Smartphone, title: "Easy Payments", desc: "Pay with EcoCash, Visa, or Mastercard. Quick and hassle-free." },
              { icon: Users, title: "Support Local Talent", desc: "Directly empower creators in your community and beyond." },
              { icon: Shield, title: "Secure Transactions", desc: "Bank-grade encryption keeps your payments safe and private." },
            ].map((f) => (
              <div key={f.title} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Creators</h2>
              <p className="mt-2 text-muted-foreground">Discover talent worth supporting</p>
            </div>
            <Button variant="outline" className="hidden sm:inline-flex" asChild>
              <Link to="/discover">View All <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockCreators.slice(0, 3).map((c) => (
              <CreatorCard key={c.id} creator={c} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/discover">View All Creators</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-muted-foreground">Three simple steps to make an impact</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", icon: Users, title: "Discover Creators", desc: "Browse through talented Zimbabwean creators across music, art, tech, and more." },
              { step: "2", icon: CreditCard, title: "Choose Your Amount", desc: "Pick any amount you'd like to contribute. Every dollar counts!" },
              { step: "3", icon: Zap, title: "Pay Instantly", desc: "Use EcoCash or card to send your support in seconds." },
            ].map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-gold text-gold-foreground text-2xl font-bold shadow-lg">
                  {s.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Join thousands of Zimbabweans supporting local creativity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="gold" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link to="/discover">Browse Creators</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
