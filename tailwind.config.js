import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths to match your project
  ],
  theme: {
    extend: {
      keyframes: {
        "text-color-change": {
          "0%, 100%": { color: "#ffffff" }, // White
          "50%": { color: "#3b82f6" }, // Blue (Tailwind's blue-500)
        },
      },
      animation: {
        "text-color-change": "text-color-change 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
});
