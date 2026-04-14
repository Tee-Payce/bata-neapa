import { createFileRoute } from "@tanstack/react-router";
import { CreatorCard } from "@/components/CreatorCard";
import { mockCreators } from "@/lib/mock-data";
import { Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover Creators — Bata neapa" },
      { name: "description", content: "Find and support talented Zimbabwean creators." },
      { property: "og:title", content: "Discover Creators — Bata neapa" },
      { property: "og:description", content: "Find and support talented Zimbabwean creators." },
    ],
  }),
  component: DiscoverPage,
});

const categories = ["All", "Musician", "Artist", "Developer", "Storyteller"];

function DiscoverPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = mockCreators.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.bio.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || c.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Discover Creators</h1>
        <p className="mt-2 text-muted-foreground">Find amazing Zimbabwean talent to support</p>
      </div>

      {/* Search & Filters */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 w-full rounded-lg border border-input bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                category === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground">No creators found matching your search.</p>
        </div>
      )}
    </div>
  );
}
