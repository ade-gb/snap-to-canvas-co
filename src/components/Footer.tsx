import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">S4C</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Snap4Canvas
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Transform your memories into stunning canvas art
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <Link to="/deals" className="text-muted-foreground hover:text-foreground transition-colors">
              Deals
            </Link>
            <Link to="/gifts" className="text-muted-foreground hover:text-foreground transition-colors">
              Gifts
            </Link>
            <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
              Help
            </Link>
            <Link to="/track" className="text-muted-foreground hover:text-foreground transition-colors">
              Track Order
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Snap4Canvas. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Created by <a href="https://linktr.ee/moyo_dev?utm_source=linktree_profile_share&ltsid=2e5a1d83-f7a5-4029-a2f8-ec04d5f430e9" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">moyodev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
