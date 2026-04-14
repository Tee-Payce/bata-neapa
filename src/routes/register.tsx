import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff, Upload } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Bata neapa" },
      { name: "description", content: "Create your Bata neapa account." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [role, setRole] = useState<"creator" | "donor">("donor");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Join the Bata neapa community</p>
        </div>

        {/* Role selector */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {(["donor", "creator"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`rounded-lg border-2 py-3 text-sm font-semibold transition-all ${
                role === r
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30"
              }`}
            >
              {r === "donor" ? "Register as Donor" : "Register as Creator"}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-card">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-foreground">
                Name {role === "donor" && <span className="text-muted-foreground">(optional)</span>}
              </label>
              <input
                type="text"
                className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="relative mt-1.5">
                <input
                  type={showPassword ? "text" : "password"}
                  className="h-10 w-full rounded-lg border border-input bg-background px-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {role === "creator" && (
              <>
                <div>
                  <label className="text-sm font-medium text-foreground">Category</label>
                  <select className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select category</option>
                    <option>Musician</option>
                    <option>Artist</option>
                    <option>Developer</option>
                    <option>Storyteller</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Bio</label>
                  <textarea
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    rows={3}
                    placeholder="Tell supporters about yourself..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Profile Image</label>
                  <div className="mt-1.5 flex h-20 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-input hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Upload className="h-4 w-4" />
                      <span>Click to upload</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {role === "donor" && (
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-input text-primary focus:ring-ring" />
                <span className="text-sm text-foreground">Donate anonymously by default</span>
              </label>
            )}

            <Button className="w-full" size="lg">
              {role === "creator" ? "Create Creator Account" : "Create Donor Account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
