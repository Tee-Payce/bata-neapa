import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/creator/settings")({
  component: CreatorSettings,
});

function CreatorSettings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="mt-1 text-muted-foreground">Manage your profile and preferences</p>

      <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <h2 className="text-lg font-semibold text-card-foreground">Profile</h2>
          <div>
            <label className="text-sm font-medium text-foreground">Name</label>
            <input className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" defaultValue="Tendai Moyo" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Bio</label>
            <textarea className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" rows={3} defaultValue="Blending mbira melodies with modern Afrobeats." />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Category</label>
            <select className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option>Musician</option>
              <option>Artist</option>
              <option>Developer</option>
              <option>Storyteller</option>
            </select>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <h2 className="text-lg font-semibold text-card-foreground">Change Password</h2>
          <div>
            <label className="text-sm font-medium text-foreground">Current Password</label>
            <input type="password" className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">New Password</label>
            <input type="password" className="mt-1.5 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
        </div>

        <Button size="lg">Save Changes</Button>
      </form>
    </div>
  );
}
