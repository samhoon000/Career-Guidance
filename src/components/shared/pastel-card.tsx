import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export type PastelAccent = "blue-indigo" | "purple-fuchsia" | "sky-cyan" | "emerald-teal" | "slate";

const accentBackgrounds: Record<PastelAccent, string> = {
  "blue-indigo": "bg-gradient-blue-indigo",
  "purple-fuchsia": "bg-gradient-purple-fuchsia",
  "sky-cyan": "bg-gradient-sky-cyan",
  "emerald-teal": "bg-gradient-emerald-teal",
  slate: "bg-gradient-surface",
};

interface PastelCardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: PastelAccent;
  surfaceClassName?: string;
  children: ReactNode;
}

export const PastelCard = ({
  accent = "slate",
  className,
  surfaceClassName,
  children,
  ...props
}: PastelCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-[30px] p-[1.5px] transition-all duration-300",
        accentBackgrounds[accent],
        "shadow-soft hover:-translate-y-1 hover:shadow-elevated",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-[28px] border border-white/60 bg-white/95 p-6 backdrop-blur-sm transition-all duration-300",
          "hover:border-white/80",
          surfaceClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

