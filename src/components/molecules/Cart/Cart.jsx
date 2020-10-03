import React, { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';
import { withStyles, Typography } from "@material-ui/core";
import { ActionButton } from '../../atoms'
import { styles } from "./styles";

const CartRaw = (props) => {
  const { classes } = props;
  const [cart, setCart] = useContext(CartContext);

  let totalProducts = 0;
  let currentProducts = 0;
  cart.map(product => {
    currentProducts += product.amount;
  })
  totalProducts = currentProducts;

  return (
    <div>
      <Typography>Shopping List</Typography>
      <Typography>Total items: {totalProducts}</Typography>
      <ActionButton
        title={`Buy`}
        /* onClick={() => setAmount(count)} */
        buttonStyle={classes.buyButton}
      />
    </div>
  )
}

export const Cart = withStyles(styles)(CartRaw);
