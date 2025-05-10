/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // Purple
        accent: "#D1D5DB",  // Light Grey
        background: "#FFFFFF", // White
        text: "#1F2937", // Dark Grey for text, good contrast on white
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.primary"),
                opacity: 0.8,
              },
            },
            strong: {
              color: theme("colors.text"),
              fontWeight: "600",
            },
            h1: {
              color: theme("colors.text"),
            },
            h2: {
              color: theme("colors.text"),
            },
            h3: {
              color: theme("colors.text"),
            },
            h4: {
              color: theme("colors.text"),
            },
            // Add more styles for Notion-like appearance
            "blockquote": {
              borderLeftColor: theme("colors.primary"),
              color: theme("colors.gray.700"),
              fontStyle: "italic",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.purple.700"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
