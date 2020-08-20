import React, { useContext } from "react";
import MockData from "../mockdata.json";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { paddingGenerator, marginGenerator } from "../helpers/utils";
import BottomNav from "./BottomNav";
import { motion } from "framer-motion";
import { CartContext } from "./CartContext";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    height: "150px",
    width: "150px",
    objectFit: "contain",
    padding: "10px 20px",
    border: `solid 1px rgb(0,0,0,0.1)`,
  },
  card: {
    cursor: "grab",
    backgroundColor: "#fff",
    ...marginGenerator(["mt-30", "mb-30", "ml-30", "mr-30"]),
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...paddingGenerator(["pb-10"]),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "10vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  heading: {
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "#686868",
    flex: "2",
    fontFamily: "CircularStd, sans- serif",
  },
  price: {
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "#888888",
    flex: "1",
    fontFamily: "CircularStd, sans- serif",
  },
  overlay: {
    position: "fixed",
    display: "block",
    width: "100%",
    height: "calc(100vh - 60px)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: "blur(3px)",
    zIndex: 0,
    cursor: "pointer",
    transition: "0.3s all ease-in",
  },
}));

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProductCard = () => {
  const classes = useStyles();
  const [bottomNav, setBottomNav] = React.useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [side, setSide] = React.useState(null);

  const update = () => {
    setBottomNav(true);
  };

  const dragEnd = (data, e) => {
    setBottomNav(false);
    setSide(null);
    if (e.clientY > window.innerHeight - 150 && e.clientX < window.innerWidth / 2) {
      setCart([...cart, data]);
      Message.success(`${data.name} Added to Cart Sucessfully !`);
    }
  };

  const handleDrag = (e, info) => {
    if (
      e.clientY > window.innerHeight - 150 &&
      e.clientX < window.innerWidth / 2
    ) {
      setSide("left");
      return;
    } else if (
      e.clientY > window.innerHeight - 150 &&
      e.clientX > window.innerWidth / 2
    ) {
      setSide("right");
      return;
    } else {
      setSide(null);
    }
  };

  return (
    <motion.div>
      {bottomNav ? (
        <>
          {" "}
          <motion.div
            transition={{ ease: "fadeIn" }}
            className={classes.overlay}
          ></motion.div>
          <BottomNav side={side} />
        </>
      ) : (
          ""
        )}
      <Grid container className={classes.container}>
        {MockData.map((data, index) => {
          return (
            <Grid item xs={12} sm={3} key={index}>
              <motion.div
                className={classes.card}
                variants={item}
                initial="hidden"
                animate="visible"
                whileTap={{
                  scale: 0.6,
                  opacity: 0.8,
                  cursor: "grabbing",
                  zIndex: 6,
                }}
                drag
                onDragStart={() => update()}
                onDrag={handleDrag}
                onDragEnd={(e) => dragEnd(data, e)}
                dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
                dragElastic={1}
              >
                <div className={classes.imgContainer}>
                  <img
                    draggable="false"
                    className={classes.image}
                    src={require(`../images/${data.image}`)}
                    alt="product"
                  />
                </div>
                <div style={paddingGenerator(["pl-28"])}>
                  <Typography align="left" className={classes.heading}>
                    {data.name}
                  </Typography>
                  <Typography align="left" className={classes.price}>
                    {data.price}
                  </Typography>
                </div>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </motion.div>
  );
};

export default ProductCard;
