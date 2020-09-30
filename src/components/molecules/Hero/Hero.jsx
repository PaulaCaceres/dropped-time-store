import React, { useState, useEffect } from 'react';
import { styles } from "./styles";
import { withStyles, Typography, Grid } from "@material-ui/core";
import { ItemList, ActionButton } from '../..'
import HeroImage from '../../../assets/images/test.jpg'

const HeroRaw = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.mainContainer}
    >
      <Grid item xs={12} sm={6} className={classes.contentContainer}>
        <Typography className={classes.heroTitle}>WEBSITE TITLE</Typography>
        <Typography className={classes.heroDescription}>Website description</Typography>
        <Grid item xs={6} sm={3}>
          <Typography className={classes.heroButton}>
            <ActionButton
              title="Destacados"
              buttonStyle={classes.heroButton}
              textStyle={classes.heroTextButton}
            //onClick={() => onClick()}
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={HeroImage} className={classes.heroImage} alt='hero-background' />
      </Grid>
      {/* {loading ? <Loader /> : <ItemList />} */}
      <ItemList />
    </Grid>
  );
};

export const Hero = withStyles(styles)(HeroRaw);
