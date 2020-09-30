import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";
import styles from "./styles";
import loader from '../../../assets/icons/clock.svg'

class LoaderRaw extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.loadingText}>
          Loading...
        </Typography>
        <img src={loader} alt="loader" className={classes.loadingIcon} />
      </div>
    );
  }
}

export const Loader = withStyles(styles)(LoaderRaw);
