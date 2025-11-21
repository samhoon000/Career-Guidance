import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle2, Circle, BookOpen, Code, Rocket } from "lucide-react";

const LearningPath = () => {
const levels = [
    {
      id: 1,
      title: "Foundations",
      level: "Months 1-2",
      status: "completed",
      icon: BookOpen,
      topics: ["Python Programming", "Statistics", "SQL Basics", "Data Visualization"],
      color: "success",
    },
    {
      id: 2,
      title: "Core Skills",
      level: "Months 3-4",
      status: "current",
      icon: Code,
      topics: ["Advanced SQL", "Pandas & NumPy", "Machine Learning Basics", "Git"],
      color: "primary",
    },
    {
      id: 3,
      title: "Specialization",
      level: "Months 5-6",
      status: "locked",
      icon: Rocket,
      topics: ["Deep Learning", "Cloud Platforms", "MLOps", "Capstone Project"],
      color: "muted",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Data Analyst Track
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Learning Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured 6-month journey from beginner to job-ready Data Analyst
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {levels.map((level, index) => {
            const Icon = level.icon;
            const isCompleted = level.status === "completed";
            const isCurrent = level.status === "current";
            const isLocked = level.status === "locked";

            return (
              <Card
                key={level.id}
                className={`relative p-6 transition-all hover:shadow-lg ${
                  isCurrent ? "border-primary border-2 shadow-md" : ""
                } ${isLocked ? "opacity-60" : ""}`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon & Status */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        isCompleted
                          ? "bg-success/10"
                          : isCurrent
                          ? "bg-primary/10"
                          : "bg-muted"
                      }`}
                    >
                      {isLocked ? (
                        <Lock className="w-8 h-8 text-muted-foreground" />
                      ) : (
                        <Icon
                          className={`w-8 h-8 ${
                            isCompleted
                              ? "text-success"
                              : isCurrent
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{level.title}</h3>
                      <Badge
                        variant={
                          isCompleted
                            ? "default"
                            : isCurrent
                            ? "default"
                            : "secondary"
                        }
                        className={
                          isCompleted
                            ? "bg-success"
                            : isCurrent
                            ? "bg-primary"
                            : ""
                        }
                      >
                        {level.level}
                      </Badge>
                      {isCompleted && (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      )}
                      {isCurrent && <Circle className="w-5 h-5 text-primary animate-pulse" />}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {level.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <Button
                      variant={isCurrent ? "default" : isLocked ? "ghost" : "outline"}
                      disabled={isLocked}
                      className={isCurrent ? "bg-gradient-to-r from-primary to-primary/90" : ""}
                    >
                      {isCompleted
                        ? "Review"
                        : isCurrent
                        ? "Continue"
                        : "Locked"}
                    </Button>
                  </div>
                </div>

                {/* Progress connector line */}
                {index < levels.length - 1 && (
                  <div className="absolute left-[2.5rem] md:left-[2.5rem] top-[5.5rem] md:top-full h-6 md:h-6 w-0.5 bg-border" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
