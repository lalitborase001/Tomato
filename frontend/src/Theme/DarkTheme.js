import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#5A20C8",
    },
    background: {
      main: "#000000",
      default: "#0D0D0D",
      paper: "#0D0D0D",
    },
    text: {
      primary: "#111111",
    },
  },
});
export default DarkTheme