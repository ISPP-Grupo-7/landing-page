import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        primary: {
          DEFAULT: "#4FD1C5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F6AD55",
          foreground: "#1A202C",
        },
        background: "#FFFFFF",
        foreground: "#1A202C",
        muted: {
          DEFAULT: "#F7FAFC",
          foreground: "#4A5568",
        },
        accent: {
          DEFAULT: "#E2E8F0",
          foreground: "#2D3748",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "show-password": {
          "0%": {
            clipPath: "inset(0 100% 0 0)",
            transform: "translateX(-10%)",
            opacity: "0",
          },
          "100%": {
            clipPath: "inset(0 0 0 0)",
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "hide-password": {
          "0%": {
            clipPath: "inset(0 0 0 0)",
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            clipPath: "inset(0 0 0 100%)",
            transform: "translateX(10%)",
            opacity: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-2px)",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(-2px)",
          },
          "75%": {
            transform: "translateX(2px)",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%) rotateY(-90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) rotateY(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%) rotateY(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) rotateY(0)",
            opacity: "1",
          },
        },
        "slide-in-top": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.3s ease-out",
        "fade-down": "fade-down 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "show-password": "show-password 1s ease-out forwards",
        "hide-password": "hide-password 1s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "shake": "shake 0.5s ease-in-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-top": "slide-in-top 0.5s ease-out",
        "fade-scale-in": "fade-scale-in 0.5s ease-out",
        "bounce-slow": "bounce-slow 3s infinite",
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
