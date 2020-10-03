import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Item, Loader } from '../..'
import products from '../../../utils/products'

const ItemListRaw = (props) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const productsList = products;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsList)
    }, 1000)
  });

  useEffect(() => {
    setLoading(true);
    promise.then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading
        ?
        <Loader />
        :
        data.map((item, index) => {
          return (
            <NavLink to={`/products/${item.id}`} key={index}>
              <Item
                title={item.name}
                description={item.description}
                onClick={() => console.log("ITEM", item.id)}
              />
            </NavLink>
          )
        })
      }
    </div>

  )
}

export const ItemList = withStyles(styles)(ItemListRaw)