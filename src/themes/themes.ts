"use client";

import { createTheme } from "@mui/material/styles";

const iTheme = createTheme({
  cssVariables: true,
  typography: {
    // fontFamily: '"Inter", sans-serif',
    caption: {
      fontFamily: "'Open Sans', sans-serif",
    },
  },
  palette: {
    background: {
      default: "#131010",
    },
    primary: {
      main: "#01559F",
      light: "#F4F5F7",
      dark: "#020414",
    },
    secondary: {
      light: "#054794",
      main: "#04163e",
      dark: "#020414",
    },
    info: {
      main: "#01559F",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // maxHeight: "100vh",
          maxWidth: "100vw",
          transition: "all 300ms ease",
          backgroundColor: "var(--mui-palette-background-default)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default iTheme;
