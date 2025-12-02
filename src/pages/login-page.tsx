import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { API } from "@/api/authApi";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // ----- CALL BACKEND LOGIN API -----
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrUsername: formValues.email,
          password: formValues.password,
        }),
      });

      const data = await res.json();

      // ❌ Incorrect login → stop redirect
      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // ----- Save token + username -----
      localStorage.setItem("cg-token", data.token);
      localStorage.setItem("career-guidance-user-name", data.username);

      // ----- Redirect on success -----
      navigate("/index.html", { replace: true });
    } catch (err) {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
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

      {/* Back button */}
      <div className="mt-6 ml-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition"
        >
          <span>←</span>
          <span>Back</span>
        </button>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-card rounded-3xl shadow-2xl border border-border/60 p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to continue your learning journey</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="login-email">Email / Username</Label>
              <Input
                id="login-email"
                type="text"
                placeholder="you@example.com or username"
                value={formValues.email}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={formValues.password}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, password: event.target.value }))
                }
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-[#0A3A67] via-primary to-orange-400 text-white rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            New here?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Create an account
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
