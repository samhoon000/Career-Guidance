import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="container relative mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 shadow-glow">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-slate-900">
            [app_name]
          </span>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/70 px-6 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur md:flex">
          <a href="#tracks" className="rounded-full px-3 py-1 transition-colors hover:text-slate-900">
            Career Tracks
          </a>
          <a href="#progress" className="rounded-full px-3 py-1 transition-colors hover:text-slate-900">
            My Progress
          </a>
          <a href="#mentor" className="rounded-full px-3 py-1 transition-colors hover:text-slate-900">
            AI Mentor
          </a>
            <a href="#mentor" className="rounded-full px-3 py-1 transition-colors hover:text-slate-900">
            About us
          </a>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
