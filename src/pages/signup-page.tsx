import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const SignupPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const messages: string[] = [];

    if (!formValues.username.trim()) {
      messages.push("Please enter a username.");
    }

    if (!emailPattern.test(formValues.email)) {
      messages.push("Please enter a valid email address.");
    }

    if (!passwordPattern.test(formValues.password)) {
      messages.push("Password must include 8+ characters with uppercase, lowercase, and a number.");
    }

    if (messages.length) {
      setErrors(messages);
      return;
    }

    setErrors([]);
    localStorage.setItem("career-guidance-user-name", formValues.username.trim());
    navigate("/index.html", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 flex flex-col">
      <header className="w-full border-b border-border/60 bg-background/95">
        <div className="container mx-auto px-4 h-16 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-foreground tracking-tight">[app_name]</span>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-card rounded-3xl shadow-2xl border border-border/60 p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p className="text-muted-foreground">Join SkillQuest to unlock personalized learning paths.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="signup-username">Username</Label>
              <Input
                id="signup-username"
                type="text"
                placeholder="Learner123"
                value={formValues.username}
                onChange={(event) => setFormValues((prev) => ({ ...prev, username: event.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={formValues.email}
                onChange={(event) => setFormValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={formValues.password}
                onChange={(event) => setFormValues((prev) => ({ ...prev, password: event.target.value }))}
              />
            </div>

            {errors.length > 0 && (
              <ul className="list-disc list-inside text-sm text-destructive space-y-1">
                {errors.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            )}

            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-[#0A3A67] via-primary to-orange-400 text-white rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <button type="button" onClick={() => navigate("/login")} className="font-semibold text-primary hover:text-primary/80 transition-colors">
              Login
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;

