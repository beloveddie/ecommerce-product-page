import "../styles/globals.css";
import { CustomTheme } from "../theme/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CustomTheme>
      <Component {...pageProps} />
    </CustomTheme>
  );
}

export default MyApp;
