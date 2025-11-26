import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PastelAccent } from "./pastel-card";

type IconVariant = PastelAccent;

const variantClasses: Record<IconVariant, string> = {
  "blue-indigo": "bg-blue-50 text-blue-700 shadow-inner shadow-blue-100/60",
  "purple-fuchsia": "bg-fuchsia-50 text-fuchsia-600 shadow-inner shadow-fuchsia-100/60",
  "sky-cyan": "bg-cyan-50 text-cyan-600 shadow-inner shadow-cyan-100/60",
  "emerald-teal": "bg-emerald-50 text-emerald-600 shadow-inner shadow-emerald-100/60",
  slate: "bg-white/80 text-slate-600 shadow-inner shadow-slate-100/60",
};

type IconBubbleSize = "md" | "lg";

const sizeClasses: Record<IconBubbleSize, string> = {
  md: "h-12 w-12 rounded-2xl [&_svg]:h-5 [&_svg]:w-5",
  lg: "h-14 w-14 rounded-3xl [&_svg]:h-6 [&_svg]:w-6",
};

interface IconBubbleProps {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: IconBubbleSize;
  className?: string;
}

export const IconBubble = ({ icon: Icon, variant = "blue-indigo", size = "md", className }: IconBubbleProps) => {
  return (
    <span
      className={cn(
        "flex items-center justify-center border border-white/60 backdrop-blur-sm",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      <Icon aria-hidden="true" />
    </span>
  );
};

