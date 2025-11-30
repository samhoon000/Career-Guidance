import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, TrendingUp } from "lucide-react";
import { PastelCard } from "@/components/shared/pastel-card";
import { IconBubble } from "@/components/shared/icon-bubble";
import { SectionHeading } from "@/components/shared/section-heading";

const ResearchBacking = () => {
  const researchPoints = [
    {
      icon: Target,
      title: "Level-Based Learning",
      stat: "87% increase",
      description: "Career development learning with structured progression increases perceived employability",
      source: "NIH Career Development Studies",
    },
    {
      icon: TrendingUp,
      title: "Gamification Impact",
      stat: "2.5x engagement",
      description: "Meta-analyses show significant positive effects on motivation, achievement, and competence",
      source: "Frontiers in Psychology",
    },
    {
      icon: Users,
      title: "AI Mentorship",
      stat: "68% faster learning",
      description: "AI mentors provide instant feedback, personalized guidance, and scalable support for all learners",
      source: "Educational Technology Research",
    },
    {
      icon: BookOpen,
      title: "Project-Based Learning",
      stat: "94% confidence boost",
      description: "Building portfolio projects develops problem-solving skills and prepares for career transitions",
      source: "Science Direct PBL Studies",
    },
  ];

  return (
    <section id="about-us-section" className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Evidence-Based Approach"
          title="Built on Leading Educational Research"
          description="Our AI & Data Science curriculum integrates proven methodologies from peer-reviewed studies on technical education and career development"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {researchPoints.map((point, index) => (
            <PastelCard key={index} surfaceClassName="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <IconBubble icon={point.icon} variant="blue-indigo" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                    <Badge variant="secondary" className="rounded-full bg-emerald-50 text-emerald-600">
                      {point.stat}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">{point.description}</p>
                  <p className="mt-2 text-xs italic text-slate-400">Source: {point.source}</p>
                </div>
              </div>
            </PastelCard>
          ))}
        </div>

        <div className="mt-12">
          <PastelCard accent="sky-cyan" surfaceClassName="flex flex-col gap-4 text-center">
            <h3 className="text-2xl font-semibold text-slate-900">Proven Learning Theories Applied</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Bloom's Taxonomy",
                "Constructivism",
                "Gamification Theory",
                "Social Learning Theory",
                "Competency-Based Education",
              ].map((theory) => (
                <Badge key={theory} variant="outline" className="rounded-full border-slate-200 px-4 py-2 text-slate-600">
                  {theory}
                </Badge>
              ))}
            </div>
          </PastelCard>
        </div>
      </div>
    </section>
  );
};

export default ResearchBacking;
