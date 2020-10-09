import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CartProvider } from './context/cartContext';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Home, ItemDetailScreen, CartScreen, ProductsScreen } from "./pages";
import { NavBar } from './components'
import { theme } from "./styles";
import "./App.css";
import "./index.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider theme={theme({ paletteType: "dark" })}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Switch>
            <CartProvider>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ProductsScreen} />
              <Route exact path="/products/:id" component={ItemDetailScreen} />
              <Route exact path="/cart" component={CartScreen} />
            </CartProvider>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
