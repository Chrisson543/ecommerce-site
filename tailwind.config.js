/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '320px',   // Custom breakpoint for small mobile devices
        'sm': '480px',   // Custom breakpoint for larger mobile devices
        'tablet': '768px', // Existing Tailwind breakpoint for tablets
        'laptop': '1024px', // Existing Tailwind breakpoint for laptops
        'desktop': '1200px', // Custom breakpoint for desktops
        'large-desktop': '1440px', // Custom breakpoint for large desktops
        'xl': '1280px', // Existing Tailwind breakpoint for extra large screens
        '2xl': '1536px' // Existing Tailwind breakpoint for very large screens
      }
    },
  },
  plugins: [],
};
