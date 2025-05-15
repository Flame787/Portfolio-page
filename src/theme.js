import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      // main: "rgba(11, 141, 188, 0.66)",
      main: "rgba(3, 76, 160, 0.88)",
      transparent: "rgba(3, 76, 160, 0.75)",
      title: "rgba(6, 84, 174, 0.88)",
    },
    background: {
      // default: "#121212",
      default: "rgb(0, 15, 33)",
      // paper: "#1e1e1e",
      paper: "rgba(2, 27, 56, 0.5)",
    },
    text: {
      primary: "#ffffff",
      // secondary: "#94A3B8",
      secondary: "#c1cdde",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(1, 130, 194, 0.66)",
      // main: "rgba(0, 145, 181, 0.66)",
      // main: "rgba(1, 148, 185, 0.66)",
      // main: "rgba(3, 76, 160, 0.88)",
      // main: "rgba(0, 124, 185)",
      transparent: "rgba(6, 153, 206, 0.75)",
      title: "rgba(5, 143, 193, 0.75)",
    },
    background: {
      default: "#ffffff",
      // paper: "#f4f4f4",
      paper: "rgba(181, 235, 251, 0.75)",
    },
    text: {
      primary: "rgba(2, 64, 134, 0.88)",
      secondary: "rgba(2, 64, 134, 0.88)",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
