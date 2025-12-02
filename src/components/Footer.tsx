import { Zap } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: ["Learning Paths", "AI Mentor", "Challenges", "Projects"],
  },
  {
    title: "Resources",
    links: ["Research", "Documentation", "Community", "Blog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Privacy", "Terms"],
  },
];

const Footer = () => {
  return (
    <footer
      id="about-us-section"  
    className="border-t border-white/60 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 shadow-soft">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900">EduVista</span>
            </div>
            <p className="text-sm text-slate-500">
              © 2025 EduVista. Built on leading educational research.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">{column.title}</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-slate-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
