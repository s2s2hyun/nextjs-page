import { Theme as EmotionTheme } from "@emotion/react";

export interface Theme extends EmotionTheme {
  mode: {
    mainBackground: string;
    primaryText: string;
    secondaryText: string;
    disable: string;
    border: string;
    divider: string;
    background: string;
    tableHeader: string;
    themeIcon: string;
    blue1: string;
    blue2: string;
    blue3: string;
    green: string;
    gray: string;
  };
  fontSizes: {
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontWeights: {
    extraBold: number;
    bold: number;
    semiBold: number;
    regular: number;
  };
}

const darkTheme: Theme = {
  mode: {
    mainBackground: "#292B2E",
    primaryText: "#fff",
    secondaryText: "rgba(255,255,255,0.45)",
    disable: "rgba(255,255,255,0.25)",
    border: "#d1d5da",
    divider: "rgba(255, 255, 255, 0.6)",
    background: "rgb(217, 223, 226)",
    tableHeader: "rgba(255,255,255,0.02)",
    themeIcon: "#FBE302",
    // point-color
    blue1: "#f1f8ff",
    blue2: "#c0d3eb",
    blue3: "#00adb5",
    green: "#1fab89",
    gray: "#393e46",
  },
  fontSizes: {
    xsm: "10px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "28px",
  },
  fontWeights: {
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    regular: 400,
  },
};

const lightTheme: Theme = {
  mode: {
    mainBackground: "#fff",
    primaryText: "#292B2E",
    secondaryText: "rgba(0, 0, 0, 0.45)",
    disable: "rgba(0, 0, 0, 0.25)",
    border: "#d1d5da",
    divider: "rgba(106, 115, 125, 0.3)",
    background: "rgb(217, 223, 226)",
    tableHeader: "rgba(0, 0, 0, 0.02)",
    themeIcon: "#1fab89",
    blue1: "#f1f8ff",
    blue2: "#c0d3eb",
    blue3: "#00adb5",
    green: "#1fab89",
    gray: "#393e46",
  },
  fontSizes: {
    xsm: "10px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "28px",
  },
  fontWeights: {
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    regular: 400,
  },
};

// const fontSizes: Theme = {
//   xsm: "10px",
//   sm: "12px",
//   md: "16px",
//   lg: "20px",
//   xl: "24px",
//   xxl: "28px",
// };

// const fontWeights: Theme = {
//   extraBold: 800,
//   bold: 700,
//   semiBold: 600,
//   regular: 400,
// };

export { darkTheme, lightTheme };
