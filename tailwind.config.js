/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:    "#0D0D0D",
          darkgray: "#1A1A1A",
          gray:     "#2C2C2C",
          light:    "#F5F5F5",
          blue: {
            50:  "#e8f6ff",
            100: "#bae6ff",
            200: "#7dd3fc",
            300: "#38bdf8",
            400: "#0ea5e9",
            500: "#29ABE2",
            600: "#0284c7",
            700: "#0369a1",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)",   { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
      },
      spacing: {
        section:      "7rem",
        "section-sm": "4rem",
      },
      boxShadow: {
        card:      "0 4px 24px rgba(0,0,0,0.08)",
        "card-lg": "0 8px 40px rgba(0,0,0,0.14)",
        blue:      "0 4px 20px rgba(41,171,226,0.35)",
      },
      backgroundImage: {
        "hero-gradient":    "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 65%, #0D0D0D 100%)",
        "section-gradient": "linear-gradient(180deg, #f8fafc 0%, #f0f9ff 100%)",
      },
    },
  },
  plugins: [],
};