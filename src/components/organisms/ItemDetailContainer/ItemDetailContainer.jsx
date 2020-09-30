import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import { ItemDetail, Loader } from '../../'
import { styles } from "./styles";
import products from '../../../utils/products'

const ItemDetailContainerRaw = (props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);
  const { classes } = props
  const productsList = products

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsList)
    }, 1000)
  });

  useEffect(() => {
    setLoading(true);
    promise.then(result => {
      const selectedProduct = result.find(product => product.id == props.productId)
      setProduct(selectedProduct);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(`YOU BOUGHT ${amount} PRODUCTS`);
  }, [amount])

  return (
    <div className={classes.mainContainer}>
      {loading
        ?
        <Loader />
        :
        <>
          <ItemDetail item={product} setAmount={setAmount} />
        </>
      }
    </div>
  )
}

export const ItemDetailContainer = withStyles(styles)(ItemDetailContainerRaw);
