import { ThemeProvider } from "@mui/material/styles";
import { theme } from ".";

export const CustomTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
