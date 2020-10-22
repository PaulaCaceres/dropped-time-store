import React, { Component } from "react";
import { withStyles, TextField } from "@material-ui/core";
import { styles } from "./styles";

class FormRaw extends Component {
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
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
          <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </form>
    );
  }
}

export const Form = withStyles(styles)(FormRaw);
