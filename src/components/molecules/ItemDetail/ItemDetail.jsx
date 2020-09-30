import React, { useState } from 'react'
import { withStyles, Paper, Typography } from "@material-ui/core";
import { styles } from './styles';
import { ActionButton, Counter } from '../..';

const ItemDetailRaw = (props) => {
    const [count, setCount] = useState(0)
    const { classes, item, setAmount } = props;

    return (
        <Paper>
            <Typography>
                {item.name}
            </Typography>
            <img src={item.image} className={classes.itemImage} alt="item" />
            <Typography>
                {item.description}
            </Typography>
            <ActionButton
                title="Comprar"
                onClick={() => setAmount(count)}
            />
            <Counter currentCount={count} changeCount={setCount} max={item.stock} min="0" />
        </Paper>
    )
}

export const ItemDetail = withStyles(styles)(ItemDetailRaw);
