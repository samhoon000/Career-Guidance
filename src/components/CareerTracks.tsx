import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BarChart3, Brain, Cloud, Cpu, CheckCircle2 } from "lucide-react";
import { PastelCard } from "@/components/shared/pastel-card";
import type { PastelAccent } from "@/components/shared/pastel-card";
import { IconBubble } from "@/components/shared/icon-bubble";
import { SectionHeading } from "@/components/shared/section-heading";

interface Track {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
  accent: PastelAccent;
  iconTone: string;
}

const tracks: Track[] = [
  {
    id: "data-analyst",
    icon: BarChart3,
    title: "Data Analyst",
    description: "Transform raw data into actionable insights using SQL, Python, and visualization tools.",
    skills: ["SQL", "Python", "Excel", "Tableau", "Power BI"],
    accent: "blue-indigo",
    iconTone: "text-sky-600",
  },
  {
    id: "data-scientist",
    icon: Brain,
    title: "Data Scientist",
    description: "Build predictive models and machine learning solutions to solve complex business problems.",
    skills: ["Python", "R", "Machine Learning", "Statistics", "Deep Learning"],
    accent: "purple-fuchsia",
    iconTone: "text-fuchsia-600",
  },
  {
    id: "cloud-engineer",
    icon: Cloud,
    title: "Cloud Engineer",
    description: "Deploy and manage cloud infrastructure for data solutions on AWS, Azure, or GCP.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    accent: "sky-cyan",
    iconTone: "text-cyan-600",
  },
  {
    id: "ml-engineer",
    icon: Cpu,
    title: "ML Engineer",
    description: "Productionize machine learning models and build AI-powered applications at scale.",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "APIs"],
    accent: "emerald-teal",
    iconTone: "text-emerald-600",
  },
];

const CareerTracks = () => {
  const navigate = useNavigate();

  const handleStartPath = (trackId: string) => {
    if (trackId === "data-analyst") {
      navigate("/data-analyst");
    } else if (trackId === "data-scientist") {
      navigate("/data-scientist");
    } else if (trackId === "big-data-engineer") {
      navigate("/big-data-engineer");
    } else if (trackId === "cloud-engineer") {
      navigate("/cloud-engineer");
    } else if (trackId === "ml-engineer") {
      navigate("/ml-engineer");
    }
  };

  return (
    <section className="relative py-24" id="tracks">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Career Tracks"
          description="Select the career path that aligns with your goals. Each track offers structured learning, hands-on projects, and industry-recognized skills."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <PastelCard key={track.id} accent={track.accent} surfaceClassName="h-full flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <IconBubble icon={Icon} variant={track.accent} size="lg" className={track.iconTone} />
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900">{track.title}</h3>
                    <p className="text-sm text-slate-500">{track.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {track.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full bg-slate-100 text-xs text-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button variant="gradient" className="w-full" onClick={() => handleStartPath(track.id)}>
                  Start This Path
                </Button>
              </PastelCard>
            );
          })}
        </div>

        <div className="mt-12">
          <PastelCard accent="purple-fuchsia" surfaceClassName="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-slate-900">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <h3 className="text-xl font-semibold">Not Sure Which Path?</h3>
            </div>
            <p className="text-sm text-slate-500">
              Take our career assessment quiz to discover which track matches your skills, interests, and career goals.
            </p>
            <Button variant="glass" size="lg" id="take-assessment-button">
              Take Career Assessment
            </Button>
          </PastelCard>
        </div>
      </div>
    </section>
  );
};

export default CareerTracks;