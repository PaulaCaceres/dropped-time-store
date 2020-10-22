import React, { useState, useEffect } from "react";
import { getFirestore } from '../../firebase';
import { NavLink } from "react-router-dom";
import { withStyles, Typography, Breadcrumbs, Paper } from "@material-ui/core";
import { ActionButton, Cart } from '../../components'
import { styles } from "./styles";

const CheckoutScreenRaw = (props) => {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.title}>Order Checkout</Typography>

      <Breadcrumbs className={classes.breadcrumbs}>
        <NavLink to='/' className={classes.link}>
          Home
          </NavLink>
        <NavLink to='/products' className={classes.link}>
          Products
          </NavLink>
        <Typography className={classes.selectedBreadcrumb}>Checkout</Typography>
      </Breadcrumbs>

      <Paper className={classes.mainContainer}>
        <Typography className={classes.text}>Shipping details</Typography>

      </Paper>

      <Paper className={classes.mainContainer}>
        <Typography className={classes.text}>Payment details </Typography>

      </Paper>

      <Paper className={classes.mainContainer}>
        <Typography className={classes.text}>Your order </Typography>

      </Paper>

      <Cart />

      <ActionButton title='Confirm order' />
    </div>
  );
}

export const CheckoutScreen = withStyles(styles)(CheckoutScreenRaw);
