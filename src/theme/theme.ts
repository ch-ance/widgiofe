import { ThemeOptions } from "@mui/material/styles/createTheme";

// currently all dark theme
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#002aff",
    },
    secondary: {
      main: "#ffd300",
    },
    background: {
      default: "#14110f",
    },
    error: {
      main: "#9a031e",
    },
    text: {
      primary: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 400,
      sm: 760,
      md: 980,
      lg: 1200,
      xl: 1800,
    },
  },
};
