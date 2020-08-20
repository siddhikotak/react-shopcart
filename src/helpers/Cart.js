import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Typography, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            height: theme.spacing(30),
        },
    },
    count: {
        "& > *": {
            margin: theme.spacing(1),
            position: "fixed",
        },
    },
    cartpage: {
        height: "calc(100vh - 9vh)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "CircularStd, sans- serif",
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "26px",
        color: "#333333",
        fontFamily: "CircularStd, sans- serif",
    },
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "35vh",
        width: "auto",
        marginTop: "10px",
    },
}));

const Cart = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);
    return (
        <div>
            {cart.length === 0 ? (
                <div className={classes.cartpage} style={{ paddingTop: "9vh" }}>
                    <Typography className={classes.title}>
                        Your Cart is Empty !
                    </Typography>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button
                            size="large"
                            style={{
                                backgroundColor: "#333333",
                                color: "#e6e6e6",
                                marginLeft: "20px",
                                fontWeight: "bold",
                                fontFamily: "CircularStd, sans- serif",
                            }}
                        >
                            Shop Now
            </Button>
                    </Link>
                </div>
            ) : (
                    <Grid container style={{ paddingLeft: "30px", paddingTop: "12vh" }}>
                        <Grid item xs={12} lg={8}>
                            {cart.map((data, index) => {
                                return (
                                    <div className={classes.root} key={index}>
                                        <Paper>
                                            <Grid container className={classes.card}>
                                                <Grid item xs={3} className={classes.card}>
                                                    <img
                                                        className={classes.image}
                                                        src={require(`../images/${data.image}`)}
                                                        alt="product"
                                                    />
                                                </Grid>
                                                <Grid item xs={4} className={classes.card}>
                                                    <Typography
                                                        style={{
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                            color: "#333333",
                                                            fontFamily: "CircularStd, sans- serif",
                                                        }}
                                                    >
                                                        {data.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2} className={classes.card}>
                                                    <Typography
                                                        style={{
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                            color: "#333333",
                                                            fontFamily: "CircularStd, sans- serif",
                                                        }}
                                                    >
                                                        {data.price}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3} className={classes.card}>
                                                    <Button
                                                        size="large"
                                                        style={{
                                                            zIndex: "1",
                                                            backgroundColor: "#333333",
                                                            color: "#e6e6e6",
                                                            marginLeft: "20px",
                                                            fontWeight: "bold",
                                                            fontFamily: "CircularStd, sans- serif",
                                                        }}
                                                    >
                                                        Buy Now
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </div>
                                );
                            })}
                        </Grid>
                        <Grid item xs={12} lg={4} className={classes.count}>
                            <Paper
                                style={{
                                    height: "85vh",
                                    width: "400px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: "26px",
                                        color: "#333333",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Cart Items: {cart.length}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
        </div>
    );
};
export default Cart;
