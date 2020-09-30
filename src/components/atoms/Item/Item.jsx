import React from 'react';
import { withStyles, Paper, Typography } from "@material-ui/core";
import { styles } from "./styles";
import { ActionButton } from '../..';
import item from '../../../assets/icons/book.svg'

const ItemRaw = (props) => {

  const {
    classes,
    img,
    title,
    description,
    onClick = () => { },
  } = props;

  return (
    <Paper>
      <Typography>
        {title}
      </Typography>
      <img src={item} className={classes.itemImage} alt="item" />
      <Typography>
        {description}
      </Typography>
      {/*  <ActionButton
        title="Button"
        onClick={() => onClick()}
      /> */}
    </Paper>
  );
};

export const Item = withStyles(styles)(ItemRaw);