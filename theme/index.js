import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7d1a",
    },

    secondary: {
      main: "#ffede0",
    },

    neutral: {
      veryDarkBlue: "#1d2025",
      darkGrayishBlue: "#68707d",
      grayishBlue: "#b6bcc8",
      lightGrayishBlue: "#f7f8fd",
      white: "#ffffff",
      black: "#000000",
      opaqueBlack: "#000000bf",
    },
  },
  typography: {
    fontFamily: ["Kumbh Sans", "sans-serif"].join(","),
  },
});
