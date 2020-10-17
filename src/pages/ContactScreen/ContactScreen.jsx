import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { styles } from "./styles";

const ContactScreenRaw = (props) => {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.text}>Please contact us at contact@dropped-time.com and let us know your concern.</Typography>
    </div>
  );
}

export const ContactScreen = withStyles(styles)(ContactScreenRaw);
