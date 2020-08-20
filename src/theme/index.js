import { createMuiTheme } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },

  overrides: {
    MuiIconButton: {},
    MuiAppBar: {
      root: {
        padding: "0 12px",
      },
      colorPrimary: {
        backgroundColor: "#ffffff",
        borderBottom: "solid 1px gray",
      },
    },
  },
});

export default muiTheme;
