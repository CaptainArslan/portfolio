import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "320px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      colors: {
        background: "#F8FAFC",
        surface: "#FFFFFF",
        "soft-surface": "#F1F5F9",
        border: "#E2E8F0",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        "text-muted": "#94A3B8",
        accent: "#2563EB",
        hover: "#1D4ED8",
        "soft-accent": "#DBEAFE",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 10px 40px rgba(0,0,0,0.08), 0 4px 16px rgba(37,99,235,0.06)",
        glow: "0 0 40px rgba(37,99,235,0.12)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "blur-in": "blur-in 0.8s ease-out forwards",
        "shimmer": "shimmer 2s infinite",
        "glow": "glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "blur-in": {
          from: { opacity: "0", filter: "blur(10px)" },
          to: { opacity: "1", filter: "blur(0px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37,99,235,0.4)" },
          "50%": { boxShadow: "0 0 30px rgba(37,99,235,0.6)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
        "hero-gradient": "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)",
      },
      spacing: {
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};

export default config;
