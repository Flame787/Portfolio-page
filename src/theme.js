import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      // main: "rgba(11, 141, 188, 0.66)",
      // main: "rgba(3, 76, 160, 0.88)",
      main: "rgba(4, 58, 125, 0.5)",
      // transparent: "rgba(3, 76, 160, 0.75)",
      transparent: "rgba(4, 58, 125, 0.65)",
      // title: "rgba(29, 167, 231, 0.88)",
      title: "rgba(42, 181, 246, 0.88)",
      title2: "rgba(31, 142, 193, 0.88)",
      title3: "rgba(251, 251, 252, 0.88)",
      button: "rgba(19, 145, 203, 0.88)",
      button2: "rgba(16, 115, 161, 0.88)",
      form: "rgba(89, 190, 236, 0.88)",
    },
    background: {
      // default: "#121212",
      default: "rgb(0, 15, 33)",
      // paper: "#1e1e1e",
      // paper: "rgba(2, 27, 56, 0.5)",
      paper: "rgba(4, 58, 125, 0.5)",
    },
    text: {
      primary: "#ffffff",
      // secondary: "#94A3B8",
      secondary: "#c1cdde",
    },
  },
  typography: {
    // fontFamily: "Roboto, sans-serif",
    // fontFamily: "Marcellus-Regular, serif",
    // fontFamily: "Source-Sans-Regular, sans-serif",
    // fontFamily: "Lato-Regular, sans-serif",
    fontFamily: "Satoshi-Regular, sans-serif"
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(5, 143, 193, 0.75)",
      transparent: "rgba(6, 153, 206, 0.75)",
      title: "rgba(5, 143, 193, 0.75)",
      title3: "rgba(2, 64, 134, 0.88)",
      form: "rgba(52, 154, 214, 0.88)",
    },
    background: {
      default: "#ffffff",
      // paper: "#f4f4f4",
      // paper: "rgba(181, 235, 251, 0.75)",
      paper: "rgba(237, 250, 254, 0.6)",
    },
    text: {
      primary: "rgba(2, 64, 134, 0.88)",
      secondary: "rgba(2, 64, 134, 0.88)",
    },
  },
  typography: {
    // fontFamily: "Roboto, sans-serif",
    // fontFamily: "Marcellus-Regular, serif",
  //   fontFamily: "Source-Sans-Regular, sans-serif",
  // fontFamily: "Lato-Regular, sans-serif",
  fontFamily: "Satoshi-Regular, sans-serif"
  },
});
