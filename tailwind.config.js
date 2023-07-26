module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "main-100": "#26172e",
        "main-200": "#DDE4E4",
        "main-300": "#CED9D9",
        "main-400": "#C0D8D8",
        "main-500": "#0E8080",
        "overplay-30": "rgba(0,0,0,0.3)",
        "overplay-10": "rgba(0,0,0,0.01)",
        "text-zingchart":
          "linear-gradient(91.56deg, #ff9357 1.54%, #9100ff 98.71%)",
      },
      colors: {
        "main-100": "#E7ECEC",
        "main-200": "#DDE4E4",
        "main-300": "#CED9D9",
        "main-400": "#C0D8D8",
        "main-500": "#0E8080",
      },
      keyframes: {
        "slide-right": {
          "0%": {
            "-webkit-transform": " translateX(-500px);",
            transform: "translateX(-500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-left": {
          "0%": {
            "-webkit-transform": " translateX(500px);",
            transform: "translateX(500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-left2": {
          "0%": {
            "-webkit-transform": " translateX(500px);",
            transform: "translateX(500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "rotate-center": {
          "0%": {
            "-webkit-transform": " rotate(0);",
            transform: "rotate(0);",
          },
          "100%": {
            "-webkit-transform": "rotate(360deg);",
            transform: "rotate(360deg);",
          },
        },
        "rotate-center-pause": {
          "0%": {
            "-webkit-transform": " rotate(0);",
            transform: "rotate(0);",
            "border-radius": "9999px",
          },
          "100%": {
            "-webkit-transform": "rotate(360deg);",
            transform: "rotate(360deg);",
          },
        },
        "scale-up-hover": {
          "0%": {
            "-webkit-transform": "scale(1,1)",
            transform: " scale(1,1)",
          },
          "100%": {
            "-webkit-transform": "scale(1.05,1.07);",
            transform: " scale(1.05,1.07)",
          },
        },
        "scale-out-hover": {
          "0%": {
            "-webkit-transform": "scale(1.05,1.07)",
            transform: " scale(1.05,1.07)",
          },
          "100%": {
            "-webkit-transform": "scale(1,1);",
            transform: " scale(1,1)",
          },
        },
      },
      animation: {
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left":
          "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left2":
          "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "rotate-center": "rotate-center 8s linear infinite;",
        "rotate-center-pause": "rotate-center-pause 0.5s linear 1 both;",
        "scale-up-hover": "scale-up-hover 0.6s ease-out both",
        "scale-out-hover": "scale-out-hover 0.8s ease-out both",
      },
      flex: {
        4: "4 4 0%",
        6: "6 6 0%",
        3: "3 3 0%",
        7: "7 7 0%",
      },
    },
    screens: {
      1280: "1280px",
    },
  },
  plugins: [],
};
