import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            [app_name]
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#tracks" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Career Tracks
          </a>
          <a href="#progress" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            My Progress
          </a>
          <a href="#mentor" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            AI Mentor
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
