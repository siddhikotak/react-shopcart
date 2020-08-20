import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { motion } from "framer-motion";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  navbar: {
    overflow: "hidden",
    position: "fixed",
    bottom: "0px",
    backgroundColor: "#333333",
    height: "150px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    boxShadow:
      "3px 3px 6px rgba(0, 0, 0, 0.2), 6px 6px 12px rgba(0, 0, 0, 0.19)",
  },
  navcontent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBox: {
    height: "150px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "50px",
    color: "#fff",
  },
}));

const nav = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: "all ease-out",
  },
};

const BottomNav = ({ side }) => {
  const classes = useStyles();
  return (
    <motion.div
      className={classes.navbar}
      variants={nav}
      initial="hidden"
      animate="visible"
    >
      <Grid container className={classes.navcontent}>
        <Grid item xs={6}>
          <motion.div
            transition={{ type: "spring", stiffness: 250 }}
            className={classes.iconBox}
            whileHover={{ scale: 1.5 }}
          >
            <AddShoppingCartIcon
              className={clsx(classes.icon, side === "left" && "animate-icon")}
            />
          </motion.div>
        </Grid>
        <Grid item xs={6}>
          <motion.div
            transition={{ type: "spring", stiffness: 250 }}
            className={classes.iconBox}
            whileHover={{ scale: 1.5 }}
          >
            <FavoriteBorderIcon
              className={clsx(classes.icon, side === "right" && "animate-icon")}
            />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default BottomNav;
