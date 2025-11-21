import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, TrendingUp } from "lucide-react";

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
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Evidence-Based Approach
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Leading Educational Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI & Data Science curriculum integrates proven methodologies from peer-reviewed studies on technical education and career development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {researchPoints.map((point, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all border-l-4 border-l-primary"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{point.title}</h3>
                    <Badge variant="secondary" className="text-success font-semibold">
                      {point.stat}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {point.description}
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Source: {point.source}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Proven Learning Theories Applied
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Bloom's Taxonomy",
                "Constructivism",
                "Gamification Theory",
                "Social Learning Theory",
                "Competency-Based Education",
              ].map((theory, idx) => (
                <Badge key={idx} variant="outline" className="px-4 py-2">
                  {theory}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchBacking;
