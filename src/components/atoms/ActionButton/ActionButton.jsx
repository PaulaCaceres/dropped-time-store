import React, { Component } from "react";
import { withStyles, Button, Typography } from "@material-ui/core";
import { styles } from "./styles";

class ActionButtonRaw extends Component {
  render() {
    const {
      classes,
      title,
      buttonStyle,
      textStyle,
      img,
      onClick = () => { },
    } = this.props;

    return (
      <Button
        variant="contained"
        color="primary"
        className={`${buttonStyle} ${classes.button}`}
        onClick={() => onClick()}
      >
        {img ? (
          <img src={img} className={classes.buttonIcon} alt="button-icon" />
        ) : (
            <></>
          )}
        <Typography className={textStyle}>{title}</Typography>
      </Button>
    );
  }
}

export const ActionButton = withStyles(styles)(ActionButtonRaw);
