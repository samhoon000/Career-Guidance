import { BarChart, BrainCircuit, Cloud, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { PastelCard } from "@/components/shared/pastel-card";
import { IconBubble } from "@/components/shared/icon-bubble";
import { SectionHeading } from "@/components/shared/section-heading";

const PACKAGES = [
  {
    title: "Data Analyst",
    description: "Understand interview rounds and required skills.",
    icon: BarChart,
    accent: "blue-indigo",
    path: "/interview-packages/data-analyst",
  },
  {
    title: "Data Scientist",
    description: "Explore modeling, ML systems, and case questions.",
    icon: BrainCircuit,
    accent: "purple-fuchsia",
    path: "/interview-packages/data-scientist",
  },
  {
    title: "Cloud Engineer",
    description: "Review architecture, scalability, and deployment flows.",
    icon: Cloud,
    accent: "sky-cyan",
    path: "/interview-packages/cloud-engineer",
  },
  {
    title: "ML Engineer",
    description: "Dive into pipelines, optimization, and infra questions.",
    icon: Cpu,
    accent: "emerald-teal",
    path: "/interview-packages/ml-engineer",
  },
];

export default function InterviewPackages() {
  return (
    <section className="relative min-h-screen py-24">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" aria-hidden="true" />
      <div className="container relative mx-auto max-w-6xl px-4">
        <SectionHeading
          align="center"
          eyebrow="Interview Prep"
          title="Choose Your Interview Track"
          description="Select a role to view its interview structure and preparation material."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map(({ title, description, icon: Icon, accent, path }) => (
            <Link key={title} to={path} className="focus:outline-none">
              <PastelCard accent={accent} surfaceClassName="h-full space-y-4">
                <IconBubble icon={Icon} variant={accent} />
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
              </PastelCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

