import React from 'react'
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import cart from '../../../assets/icons/cart.svg'

const CartIconRaw = (props) => {
  const { classes } = props;

  return (
    <div>
      <img src={cart} alt="cart" className={classes.cartIcon} />
    </div>
  )
}

export const CartIcon = withStyles(styles)(CartIconRaw);
