import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  actions?: ReactNode;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  actions,
}: SectionHeadingProps) => {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left ml-0 mr-auto [@media(min-width:1024px)]:pr-16";

  return (
    <div className={cn("flex w-full flex-col gap-4", alignment, className)}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
          {eyebrow}
        </span>
      )}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className={cn("flex flex-1 flex-col gap-4", align === "center" ? "items-center" : "items-start")}>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
          {description && <p className="text-base text-slate-500 md:text-lg">{description}</p>}
        </div>
        {actions && <div className="flex items-center justify-end gap-3">{actions}</div>}
      </div>
    </div>
  );
};

