import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const calculateProductsAmount = () => {
    let currentProducts = 0;
    cart.map(product => {
      currentProducts += product.amount;
    })
    const totalAmount = currentProducts;
    return totalAmount
  }

  const calculateOrderPrice = () => {
    let currentProducts = 0;
    cart.map(product => {
      currentProducts += product.price;
    })
    const totalOrderPrice = currentProducts;
    return totalOrderPrice
  }

  return (
    <CartContext.Provider value={{ cart, setCart, amount, setAmount, price, setPrice, calculateProductsAmount, calculateOrderPrice }}>
      {props.children}
    </CartContext.Provider>
  )
}
