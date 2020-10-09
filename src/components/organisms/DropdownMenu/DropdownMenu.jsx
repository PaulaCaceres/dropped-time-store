import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withStyles, Button, Typography, MenuItem } from "@material-ui/core";
import { StyledMenu } from "../../";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { styles } from "./styles";

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
          <Typography>Racing Swimsuits</Typography>
        </MenuItem>

        <MenuItem>
          <ArrowRightIcon />
          <Typography>Trainning Swimwear</Typography>
        </MenuItem>

        <MenuItem>
          <ArrowRightIcon />
          <Typography>Equipment</Typography>
        </MenuItem>

        <MenuItem>
          <ArrowRightIcon />
          <NavLink to='/products' className={classes.link}>
            See all
        </NavLink>
        </MenuItem>

      </StyledMenu>
    </div>
  );
};

export const DropdownMenu = withStyles(styles)(DropdownMenuRaw);
