import React from 'react'
import { withStyles, Typography } from "@material-ui/core";
import { styles } from "./styles";

const CartRaw = (props) => {
  const { classes } = props;

  return (
    <div>
      <Typography>Shopping List</Typography>
    </div>
  )
}

export const Cart = withStyles(styles)(CartRaw);
