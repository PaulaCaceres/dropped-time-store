import React from 'react';
import { withStyles, Button, Card, Typography, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { styles } from "./styles";
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Swimming products"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">More details</Button>
      </CardActions>
    </Card>
  );
};

export const Item = withStyles(styles)(ItemRaw);