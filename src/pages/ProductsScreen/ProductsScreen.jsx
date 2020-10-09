import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles, Typography, Breadcrumbs } from "@material-ui/core";
import { styles } from "./styles";
import { ItemList } from "../../components";

class ProductsScreenRaw extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainContainer}>
        <Typography className={classes.title}>Find the one it suits you best</Typography>

        <Breadcrumbs className={classes.breadcrumbs}>
          <NavLink to='/' className={classes.link}>
            Home
          </NavLink>
          <Typography className={classes.selectedBreadcrumb}>Products</Typography>
        </Breadcrumbs>

        <div>
          <ItemList />
        </div>

      </div>
    );
  }
}

export const ProductsScreen = withStyles(styles)(ProductsScreenRaw);
