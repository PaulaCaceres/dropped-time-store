import React, { useState } from "react";
import { withStyles, Button } from "@material-ui/core";
import { styles } from "./styles";
import MenuItem from "@material-ui/core/MenuItem";
import { StyledMenu } from "../../";
import { Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const DropdownMenuRaw = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    console.log("event", event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { title, classes } = props;

  return (
    <div className={classes.mainContainer}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
        className={classes.menuButton}
      >
        {title}
      </Button>

      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.mainContainer}
      >
        <MenuItem>
          <ArrowRightIcon />
          <Typography>Item1</Typography>
        </MenuItem>

        <MenuItem>
          <ArrowRightIcon />
          <Typography>Item2</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export const DropdownMenu = withStyles(styles)(DropdownMenuRaw);
