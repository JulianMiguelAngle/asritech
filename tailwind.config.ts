import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-orange-100": "linear-gradient(180deg, #EB8338 20%, #E86F17 80%)",
        "gradient-orange-0": "linear-gradient(180deg, #EC8C46 20%, #EB8338 80%)",
      },
      lineHeight: {
        'display-large': '86.4px',
        'display-medium': '72px',
        'display-small': '57.6px',

        'h1-large': '63.3px',
        'h1-medium': '55.4px',
        'h1-small': '42.2px',

        'h2-large': '42.2px',
        'h2-medium': '36.9px',
        'h2-small': '31.6px',

        'h3-large': '31.6px',
        'h3-medium': '26.4px',
        'h3-small': '23.7px',

        'body-large': '26.4px',
        'body-medium': '23.5px',
        'body-small': '20.5px'
      },
      boxShadow: {
        feature: 'box-shadow: -4px 4px 20px 0px rgba(229, 229, 229, 0.10)'
      }
    },
    colors: {
      primary: {
        800: "#2E0513",
        700: "#5C0A25",
        600: "#8A0F38",
        500: "#B8144B",
        400: "#E6195E",
        300: "#EB477E",
        200: "#F0759E",
        100: "#F5A3BE",
        0: "#FAD1DF",
        white: {
          200: "#FCE3EC",
          100: "#FDEDF2",
          0: "#FEF6F9"
        }
      },
      neutral: {
        700: "#1F1F1F",
        600: "#383838",
        500: "#525252",
        400: "#6B6B6B",
        300: "#C7C7C7",
        200: "#D1D1D1",
        100: "#EBEBEB",
        0: "#FFFFFF",
        white: {
          200: "#F0F0F0",
          100: "#F5F5F5",
          0: "#FAFAFA"
        }
      },
      additional: {
        blue: "#154BCB",
        purple: "#A318D8",
        yellow: "#FFFF57"
      }
    },
    fontSize: {
      'display-large': "72px",
      'display-medium': "60px",
      'display-small': "48px",
      
      'h1-large': "48px",
      'h1-medium': "40px",
      'h1-small': "32px",

      'h2-large': "32px",
      'h2-medium': "28px",
      'h2-small': "24px",

      'h3-large': "24px",
      'h3-medium': "20px",
      'h3-small': "18px",
      
      'body-large': "18px",
      'body-medium': "16px",
      'body-small': "14px",
    },
    letterSpacing: {
      'display': '-0.32px',
      'heading': '0.16px',
      'body': '0.16px  '
    }
  },
  plugins: [],
};
export default config;
