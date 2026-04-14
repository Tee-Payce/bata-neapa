import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export interface Creator {
  id: string;
  name: string;
  category: string;
  bio: string;
  image: string;
  raised: number;
  goal: number;
}

export function CreatorCard({ creator }: { creator: Creator }) {
  const progress = Math.min((creator.raised / creator.goal) * 100, 100);

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={creator.image}
          alt={creator.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
          {creator.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-card-foreground">{creator.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{creator.bio}</p>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>${creator.raised.toLocaleString()} raised</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button size="sm" className="flex-1" asChild>
            <Link to="/creator/$creatorId" params={{ creatorId: creator.id }}>
              Support
            </Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link to="/creator/$creatorId" params={{ creatorId: creator.id }}>
              View Profile
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
