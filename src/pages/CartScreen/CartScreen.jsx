import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles, Typography, Breadcrumbs } from "@material-ui/core";
import { styles } from "./styles";
import { Cart } from "../../components";

class CartScreenRaw extends Component {
  constructor() {
    super();
    this.state = {
      isEmpty: true,
    }
  }
  handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  render() {
    const { classes } = this.props;
    const { isEmpty } = this.state;


    return (
      <div className={classes.mainContainer}>
        <Typography className={classes.title}>Your shopping list</Typography>

        <Breadcrumbs className={classes.breadcrumbs}>
          <NavLink to='/' className={classes.link}>
            Home
          </NavLink>
          <Typography className={classes.selectedBreadcrumb}>Cart</Typography>
        </Breadcrumbs>
        <Cart />
        {isEmpty ?
          <div>
            <Typography>
              Your Cart is empty.
              <NavLink to='/' className={classes.link}>
                See all products.
          </NavLink>
            </Typography>

          </div>
          :
          <div>
            <Typography color="textPrimary">{`Cart subtotal ${isEmpty}`}</Typography>
          </div>
        }

      </div>
    );
  }
}

export const CartScreen = withStyles(styles)(CartScreenRaw);
