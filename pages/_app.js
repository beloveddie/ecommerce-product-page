import { CssBaseline } from "@mui/material";import { CustomTheme } from "../theme/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CustomTheme>
      <CssBaseline />
      <Component {...pageProps} />
    </CustomTheme>
  );
}

export default MyApp;

