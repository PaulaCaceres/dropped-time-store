import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0)

  const calculateProductsAmount = () => {
    let currentProducts = 0;
    cart.map(product => {
      currentProducts += product.amount;
    })
    const totalAmount = currentProducts;
    return totalAmount
  }

  return (
    <CartContext.Provider value={{ cart, setCart, amount, setAmount, calculateProductsAmount }}>
      {props.children}
    </CartContext.Provider>
  )
}
