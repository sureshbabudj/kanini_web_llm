module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        light: "#f1f1ee",
        dark: "#0f021b",

        alexisBlue: {
          50: "#e5d7e2",
          100: "#d9c1da",
          200: "#ae99c3",
          300: "#7c77ac",
          400: "#596796",
          500: "#405d80",
          600: "#2c4f6b",
          700: "#1c3d56",
          800: "#102942",
          900: "#07152f",
        },
        xereusPurple: {
          50: "#e5ccc6",
          100: "#d9a4a1",
          200: "#c26173",
          300: "#aa3263",
          400: "#941262",
          500: "#7e0064",
          600: "#690063",
          700: "#4f0055",
          800: "#360041",
          900: "#22002e",
        },
        atlanticWave: {
          50: "#e5d7e5",
          100: "#d1c1d9",
          200: "#9d98c2",
          300: "#7588aa",
          400: "#588394",
          500: "#3f7b7e",
          600: "#2b6966",
          700: "#1b5554",
          800: "#103c41",
          900: "#07212e",
        },
        orientalNights: {
          50: "#e3d2d6",
          100: "#d4b8c3",
          200: "#b88aad",
          300: "#99649d",
          400: "#704684",
          500: "#4d2f6d",
          600: "#331f59",
          700: "#221347",
          800: "#160b38",
          900: "#0f0629",
        },
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Montserrat",
        "caption-bold": "Montserrat",
        body: "Montserrat",
        "body-bold": "Montserrat",
        "heading-3": "Montserrat",
        "heading-2": "Montserrat",
        "heading-1": "Montserrat",
        "monospace-body": "monospace",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
        overlay:
          "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        DEFAULT: "16px",
        lg: "24px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
