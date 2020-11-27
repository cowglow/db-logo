import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#666666",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        top: "auto",
        bottom: 0,
      },
    },
    MuiFab: {
      root: {
        position: "absolute",
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: "0 auto",
      },
    },
  },
});

export default theme;
