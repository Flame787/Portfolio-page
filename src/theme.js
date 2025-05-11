import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(11, 141, 188, 0.66)",
    },
    background: {
      default: "#ffffff",
      paper: "#f4f4f4",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(11, 141, 188, 0.66)",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
