import React from 'react';
import { useHistory } from "react-router-dom";
import { styles } from "./styles";
import { withStyles, Typography, Grid } from "@material-ui/core";
import { ActionButton } from '../..'
import HeroImage from '../../../assets/images/test.jpg'

const HeroRaw = (props) => {
  const { classes } = props;
  const history = useHistory();

  const goToProducts = () => {
    history.push('/products')
  }
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.mainContainer}
    >
      <Grid item xs={12} sm={3} className={classes.textContainer}>
        <Typography className={classes.heroTitle}>Dropped Time</Typography>
        <Typography className={classes.heroDescription}>Style and Swimming Performance</Typography>
        <ActionButton
          title="Trends"
          buttonStyle={classes.heroButton}
          textStyle={classes.heroTextButton}
          onClick={goToProducts}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <img src={HeroImage} className={classes.heroImage} alt='hero-background' />
      </Grid>

    </Grid>
  );
};

export const Hero = withStyles(styles)(HeroRaw);
