import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  Brain, 
  Database, 
  Cloud, 
  Cpu,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface Track {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
  salary: string;
  demand: string;
  duration: string;
  color: string;
}

const tracks: Track[] = [
  {
    id: "data-analyst",
    icon: BarChart3,
    title: "Data Analyst",
    description: "Transform raw data into actionable insights using SQL, Python, and visualization tools.",
    skills: ["SQL", "Python", "Excel", "Tableau", "Power BI"],
    salary: "$65k - $95k",
    demand: "Very High",
    duration: "4-6 months",
    color: "primary",
  },
  {
    id: "data-scientist",
    icon: Brain,
    title: "Data Scientist",
    description: "Build predictive models and machine learning solutions to solve complex business problems.",
    skills: ["Python", "R", "Machine Learning", "Statistics", "Deep Learning"],
    salary: "$95k - $140k",
    demand: "Extremely High",
    duration: "6-9 months",
    color: "accent",
  },
  {
    id: "big-data-engineer",
    icon: Database,
    title: "Big Data Engineer",
    description: "Design and build scalable data pipelines for processing massive datasets.",
    skills: ["Hadoop", "Spark", "Kafka", "Scala", "Python"],
    salary: "$100k - $150k",
    demand: "High",
    duration: "6-8 months",
    color: "success",
  },
  {
    id: "cloud-engineer",
    icon: Cloud,
    title: "Cloud Engineer",
    description: "Deploy and manage cloud infrastructure for data solutions on AWS, Azure, or GCP.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    salary: "$90k - $135k",
    demand: "Very High",
    duration: "5-7 months",
    color: "primary",
  },
  {
    id: "ml-engineer",
    icon: Cpu,
    title: "ML Engineer",
    description: "Productionize machine learning models and build AI-powered applications at scale.",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "APIs"],
    salary: "$110k - $160k",
    demand: "Extremely High",
    duration: "7-10 months",
    color: "accent",
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
    <section className="py-16 bg-background" id="tracks">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Choose Your Path
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI & Data Science Career Tracks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the career path that aligns with your goals. Each track offers structured learning, 
            hands-on projects, and industry-recognized skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <Card
                key={track.id}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-${track.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-${track.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Avg Salary</div>
                      <div className="font-semibold text-sm">{track.salary}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Job Demand</div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-success" />
                        <span className="font-semibold text-sm text-success">{track.demand}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-sm">{track.duration}</div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full gap-2 bg-gradient-to-r from-primary to-primary/90"
                  onClick={() => handleStartPath(track.id)}
                >
                  Start This Path
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <h3 className="text-xl font-bold">Not Sure Which Path?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Take our career assessment quiz to discover which AI & Data Science track matches your skills, 
              interests, and career goals.
            </p>
            <Button variant="outline" size="lg">
              Take Career Assessment
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerTracks;