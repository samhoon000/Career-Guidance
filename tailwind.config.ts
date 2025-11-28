import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        text: "#0f1724",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 0.5rem)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.25rem)",
        sm: "calc(var(--radius) - 0.5rem)",
        card: "16px",
      },
      boxShadow: {
        soft: "0 15px 45px rgba(15, 23, 42, 0.08)",
        elevated: "0 25px 65px rgba(15, 23, 42, 0.12)",
        glow: "0 0 45px rgba(14, 165, 233, 0.25)",
      },
      backgroundImage: {
        "gradient-blue-indigo":
          "linear-gradient(135deg, hsl(205 100% 94%) 0%, hsl(242 100% 94%) 52%, hsl(270 100% 96%) 100%)",
        "gradient-purple-fuchsia":
          "linear-gradient(135deg, hsl(251 91% 95%) 0%, hsl(275 100% 95%) 45%, hsl(320 100% 95%) 100%)",
        "gradient-sky-cyan":
          "linear-gradient(135deg, hsl(195 100% 94%) 0%, hsl(204 100% 93%) 48%, hsl(195 67% 91%) 100%)",
        "gradient-emerald-teal":
          "linear-gradient(135deg, hsl(163 100% 94%) 0%, hsl(158 100% 93%) 45%, hsl(191 100% 93%) 100%)",
        "gradient-surface":
          "linear-gradient(180deg, hsla(0 0% 100% / 0.95) 0%, hsla(210 44% 98% / 0.9) 100%)",
        "gradient-hero":
          "radial-gradient(circle at top, hsla(217 92% 68% / 0.25), hsla(0 0% 100% / 0)), radial-gradient(circle at 80% 20%, hsla(238 80% 66% / 0.25), hsla(0 0% 100% / 0))",
        "gradient-pastel":
          "linear-gradient(135deg, #BDE0FE 0%, #E9D5FF 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
