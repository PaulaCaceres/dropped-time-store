import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";
import { styles } from "./styles";
import { Cart } from "../../components";

class CartScreenRaw extends Component {
  render() {

    return (
      <div className={styles.mainContainer}>
        <Cart />
      </div>
    );
  }
}

export const CartScreen = withStyles(styles)(CartScreenRaw);
