import React, { useState, useContext } from 'react'
import { CartContext } from '../../../context/cartContext';
import { withStyles, Typography } from "@material-ui/core";
import { styles } from './styles';
import { ActionButton, Counter } from '../..';

const ItemDetailRaw = (props) => {
    const { classes, item } = props;
    const [count, setCount] = useState(0)
    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        const toBuy = { id: item.id, amount: count };
        setCart([...cart, toBuy])
    }

    return (
        <div className={classes.container}>
            <Typography>
                {item.title}
            </Typography>
            <img src={item.image} className={classes.itemImage} alt="item" />
            <Typography>
                {item.description}
            </Typography>
            <Typography>
                {item.price}
            </Typography>
            <Typography className={classes.stock}>
                {item.stock > count ? 'Available stock' : 'Out of stock'}
            </Typography>
            <Counter
                text={`Quantity: ${count}`}
                currentCount={count}
                changeCount={setCount}
                max={item.stock}
                min={0} />
            <ActionButton
                title={`Add to cart (${count})`}
                onClick={addToCart}
                buttonStyle={classes.buyButton}
            />
        </ div>
    )
}

export const ItemDetail = withStyles(styles)(ItemDetailRaw);
