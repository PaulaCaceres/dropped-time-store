import React, { useState } from 'react'
import { withStyles, Paper, Typography } from "@material-ui/core";
import { styles } from './styles';
import { ActionButton, Counter } from '../..';

const ItemDetailRaw = (props) => {
    const [count, setCount] = useState(0)
    const { classes, item, setAmount } = props;

    return (
        <div className={classes.container}>
            <Typography>
                {item.name}
            </Typography>
            <img src={item.image} className={classes.itemImage} alt="item" />
            <Typography>
                {item.description}
            </Typography>
            <Typography className={classes.stock}>
                {item.stock > count ? 'Available stock' : 'Out of stock'}
            </Typography>
            <Counter text={`Quantity: ${count}`} currentCount={count} changeCount={setCount} max={item.stock} min="0" />
            <ActionButton
                title={`Buy (${count})`}
                onClick={() => setAmount(count)}
                buttonStyle={classes.buyButton}
            />
        </ div>
    )
}

export const ItemDetail = withStyles(styles)(ItemDetailRaw);
