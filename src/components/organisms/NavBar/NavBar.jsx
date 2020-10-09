import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { DropdownMenu, CartIcon } from "../../";
import { styles } from "./styles";
import Logo from "../../../assets/icons/logo.svg";

const NavBarRaw = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="row"
      className={classes.mainContainer}
    >
      <Grid item xs={6} sm={2}>
        <NavLink to='/' className={classes.logoContainer}>
          <img src={Logo} alt="Logo" className={classes.logoStyle} />
        </NavLink>
      </ Grid>

      <Grid item xs={6} sm={2}>
        <DropdownMenu title={"Products"} />
      </ Grid>

      <Grid item xs={6} sm={2}>
        <NavLink to='/about' className={classes.navbarItem}>
          About
        </NavLink>
      </ Grid>

      <Grid item xs={6} sm={2}>
        <NavLink to='/contact' className={classes.navbarItem}>
          Contact
        </NavLink>
      </ Grid>

      <Grid item xs={6} sm={4} className={classes.navbarCart}>
        <NavLink to='/cart'>
          <CartIcon />
        </NavLink>
      </Grid>

    </Grid>
  );
};

export const NavBar = withStyles(styles)(NavBarRaw);
