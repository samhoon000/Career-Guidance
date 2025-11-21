import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Zap, Target, Award } from "lucide-react";

const ProgressDashboard = () => {
  const userLevel = 1;
  const currentXP = 250;
  const nextLevelXP = 1000;
  const xpProgress = (currentXP / nextLevelXP) * 100;

  const badges = [
    { id: 1, name: "First Steps", icon: Star, earned: true },
    { id: 2, name: "Problem Solver", icon: Zap, earned: true },
    { id: 3, name: "Quick Learner", icon: Target, earned: true },
    { id: 4, name: "Perfectionist", icon: Trophy, earned: true },
    { id: 5, name: "Team Player", icon: Award, earned: true },
  ];

  const recentAchievements = [
    { title: "Mastered SQL Joins & Subqueries", xp: 250, date: "2 days ago" },
    { title: "Completed Data Cleaning Project", xp: 500, date: "1 week ago" },
    { title: "Built Interactive Dashboard", xp: 350, date: "2 weeks ago" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your Learning Progress
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Level & XP Card */}
          <Card className="p-6 col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Level {userLevel}</h3>
                <p className="text-sm text-muted-foreground">Data Analyst Track • Month 4 of 6</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {userLevel}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress to Level {userLevel + 1}</span>
                <span className="font-semibold">{currentXP} / {nextLevelXP} XP</span>
              </div>
              <Progress value={xpProgress} className="h-3" />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">47</div>
                <div className="text-xs text-muted-foreground">Challenges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">89%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </Card>

          {/* Badges Card */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              Achievements
            </h3>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`flex flex-col items-center p-3 rounded-lg border ${
                    badge.earned
                      ? "bg-primary/5 border-primary/20"
                      : "bg-muted/50 border-border opacity-50"
                  } transition-all hover:scale-105`}
                >
                  <badge.icon className={`w-6 h-6 mb-1 ${badge.earned ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-xs text-center">{badge.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 col-span-1 lg:col-span-3">
            <h3 className="font-semibold text-lg mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.date}</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                    <Zap className="w-3 h-3" />
                    +{achievement.xp} XP
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
