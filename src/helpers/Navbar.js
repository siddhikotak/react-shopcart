import React, { useContext } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  AppBar,
  Badge,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { paddingGenerator } from "../helpers/utils";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => ({
  navbar: {
    zIndex: "2",
    position: "fixed",
    height: "9vh",
    width: "100%",
    boxShadow:
      "1px 1px 3px 0 rgba(0, 0, 0, 0.2), 2px 4px 6px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#333333",
    backgroundColor: "#fff",
    ...paddingGenerator(["pl-32", "pr-32"]),
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#333333",
    fontFamily: "CircularStd, sans- serif",

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);

  return (
    <AppBar elevation={0} position="fixed">
      <Grid container>
        <Grid container item justify="flex-start" alignItems="center" xs={6}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className={classes.logo}>StoreCx</div>
          </Link>
        </Grid>
        <Grid container item justify="flex-end" alignItems="center" xs={6}>
          <TextField
            placeholder="Search"
            style={{ marginRight: "0px" }}
            margin="none"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon style={{ color: "black" }} />
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
          <Link to="/cart">
            <IconButton>
              <Badge color="primary" badgeContent={cart && cart.length}>
                <ShoppingCartOutlinedIcon style={{ color: "black" }} />
              </Badge>
            </IconButton>
          </Link>
          <IconButton color="primary">
            <AccountCircleOutlinedIcon style={{ color: "black" }} />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
