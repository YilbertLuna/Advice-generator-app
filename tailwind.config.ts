import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'Mobile': '375px',
        'Desktop': '1440px'
      },
      colors: {
        'DarkGrayishBlue': 'hsl(217, 19%, 24%)',
        'DarkBlue': 'hsl(218, 23%, 16%)',
        'LightCyan': 'hsl(193, 38%, 86%)',
        'NeonGreen': 'hsl(150, 100%, 66%)'
      },
      fontSize: {
        'quote': '28px',
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
