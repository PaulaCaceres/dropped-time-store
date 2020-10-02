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
      justify="space-around"
      className={classes.mainContainer}
    >
      <Grid item xs={6} sm={3}>
        <NavLink to='/' className={styles.mainContainer}>
          <img src={Logo} alt="Logo" className={classes.logoStyle} />
        </NavLink>
      </Grid>
      <Grid item xs={6} sm={2}>
        <DropdownMenu title={"Productos"} />
      </Grid>
      <Grid item xs={6} sm={2}>
        <DropdownMenu title={"Acerca"} />
      </Grid>
      <Grid item xs={6} sm={2}>
        <DropdownMenu title={"Contacto"} />
      </Grid>
      <Grid item xs={6} sm={2}>
        <DropdownMenu title={"Soporte"} />
      </Grid>
      <NavLink to='/cart'>
        <CartIcon />
      </NavLink>
    </Grid>
  );
};

export const NavBar = withStyles(styles)(NavBarRaw);
