import { BarChart, BrainCircuit, Cloud, Cpu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PastelCard } from "@/components/shared/pastel-card";
import { IconBubble } from "@/components/shared/icon-bubble";
import { SectionHeading } from "@/components/shared/section-heading";

const PACKAGES = [
  {
    title: "Data Analyst",
    description: "Understand interview rounds and required skills.",
    icon: BarChart,
    accent: "blue-indigo",
    path: "/interview",
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
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" aria-hidden="true" />
      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Top heading & subtitle */}
        <div className="flex flex-col items-center text-center gap-4">
          <SectionHeading
            align="center"
            eyebrow="INTERVIEW PREP"
            title="Choose Your Interview Track"
            description="Select a role to understand its interview structure, key skills, and how to prepare with confidence."
          />
        </div>

        {/* Centered actions above grid */}
        <div className="mt-6 md:mt-8 flex w-full justify-center">
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md shadow-indigo-500/20 transition hover:shadow-lg hover:brightness-110"
            >
              Practice DSA
            </a>
            <a
              href="https://www.indiabix.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md shadow-indigo-500/20 transition hover:shadow-lg hover:brightness-110"
            >
              Practice Aptitude
            </a>
          </div>
        </div>

        {/* Card grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map(({ title, description, icon: Icon, accent, path }) => {
            const isDataAnalyst = title === "Data Analyst";
            const CardContent = (
              <PastelCard
                accent={accent}
                surfaceClassName="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white/90 shadow-md shadow-slate-900/5 px-5 py-6"
              >
                <IconBubble icon={Icon} variant={accent} />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                </div>
              </PastelCard>
            );

            return isDataAnalyst ? (
              <div
                key={title}
                onClick={() => navigate(path)}
                className="focus:outline-none cursor-pointer"
              >
                {CardContent}
              </div>
            ) : (
              <Link key={title} to={path} className="focus:outline-none">
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

