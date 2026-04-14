import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold text-primary">
              Bata<span className="text-gold"> neapa</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground">
              Empowering Zimbabwean creators through community-powered crowdfunding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/discover" className="hover:text-primary transition-colors">Discover Creators</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/register" className="hover:text-primary transition-colors">Become a Creator</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="cursor-pointer hover:text-primary transition-colors">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-primary transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-primary transition-colors">Contact Us</span></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="cursor-pointer hover:text-primary transition-colors">Twitter / X</span></li>
              <li><span className="cursor-pointer hover:text-primary transition-colors">Instagram</span></li>
              <li><span className="cursor-pointer hover:text-primary transition-colors">Facebook</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bata neapa. All rights reserved. Made with ❤️ in Zimbabwe.
        </div>
      </div>
    </footer>
  );
}
