import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(13, 1, 22, 0.70)",
    },
    secondary: {
      main: "#2E2E41",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
export default theme;
