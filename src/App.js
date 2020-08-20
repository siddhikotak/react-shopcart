import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./helpers/Card";
import Navbar from "./helpers/Navbar";
import Cart from "./helpers/Cart";
import { CartContext } from "./helpers/CartContext";
import { MuiThemeProvider } from "@material-ui/core";
import muiTheme from "./theme/index";

function App() {
  const [cart, setCart] = React.useState([]);
  const value = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  return (
    <div className="App">
      <MuiThemeProvider theme={muiTheme}>
        <CartContext.Provider value={value}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Card} />
              <Route exact path="/" component={Navbar} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </Router>
        </CartContext.Provider>
      </MuiThemeProvider>
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
