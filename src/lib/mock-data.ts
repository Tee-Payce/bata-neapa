import type { Creator } from "@/components/CreatorCard";

export const mockCreators: Creator[] = [
  {
    id: "1",
    name: "Tendai Moyo",
    category: "Musician",
    bio: "Blending mbira melodies with modern Afrobeats. Releasing my debut album soon!",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    raised: 2400,
    goal: 5000,
  },
  {
    id: "2",
    name: "Rudo Chikara",
    category: "Artist",
    bio: "Stone sculptor from Chitungwiza bringing Shona art to the digital world.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
    raised: 1800,
    goal: 3000,
  },
  {
    id: "3",
    name: "Tinashe Dube",
    category: "Developer",
    bio: "Building open-source tools for Zimbabwean startups and small businesses.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    raised: 4200,
    goal: 6000,
  },
  {
    id: "4",
    name: "Nyasha Sithole",
    category: "Storyteller",
    bio: "Preserving Zimbabwean folklore through animated short films and podcasts.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=300&fit=crop",
    raised: 900,
    goal: 2500,
  },
  {
    id: "5",
    name: "Kudzai Mhandu",
    category: "Musician",
    bio: "Chimurenga jazz fusion artist pushing boundaries in the Harare music scene.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
    raised: 3100,
    goal: 4000,
  },
  {
    id: "6",
    name: "Chiedza Mutasa",
    category: "Artist",
    bio: "Contemporary painter exploring identity through vibrant African patterns.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    raised: 1500,
    goal: 3500,
  },
];

export const mockDonations = [
  { id: "1", creator: "Tendai Moyo", amount: 25, date: "2024-03-15", anonymous: false },
  { id: "2", creator: "Rudo Chikara", amount: 50, date: "2024-03-12", anonymous: true },
  { id: "3", creator: "Tinashe Dube", amount: 100, date: "2024-03-10", anonymous: false },
  { id: "4", creator: "Nyasha Sithole", amount: 15, date: "2024-03-08", anonymous: false },
];

export const mockSupporters = [
  { id: "1", name: "John M.", amount: 50, date: "2024-03-15", anonymous: false },
  { id: "2", name: "Anonymous", amount: 100, date: "2024-03-14", anonymous: true },
  { id: "3", name: "Sarah K.", amount: 25, date: "2024-03-12", anonymous: false },
  { id: "4", name: "Anonymous", amount: 75, date: "2024-03-10", anonymous: true },
  { id: "5", name: "Peter N.", amount: 30, date: "2024-03-08", anonymous: false },
];
