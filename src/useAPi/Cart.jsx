// CartContext.js
import React, { createContext, useEffect, useState } from "react";

// Tạo context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [dataCart, setDataCart] = useState(()=>{
    const saveCart = JSON.parse (localStorage.getItem('datacart'))
    return saveCart ?? [];
    
  });
  
useEffect(()=>{
localStorage.setItem('datacart', JSON.stringify(dataCart))
},[dataCart]);


  const addtoCartClick = (item) => {
    if (!dataCart.find((value) => value.id === item.id)) {
      setDataCart((prev) => [...prev, item]);
      setCartOpen(!cartOpen);
    }
  };
  const removeCart = (value)=>{
    const newCart = dataCart.filter(item => item.id !== value)
    setDataCart(newCart)
    localStorage.setItem('datacart', JSON.stringify(newCart))
  };
 
  const tongleClick = () => {
    setCartOpen(!cartOpen);
  };
  const handleCloseCart = (e)=>{
    if(e.target.classList.contains('cart-modal-overlay'))
    {return setCartOpen(false)}
  }

// console.log(dataCart);
  return (
    <CartContext.Provider value={{ dataCart, addtoCartClick, handleCloseCart,removeCart,cartOpen, tongleClick }}>
      {children}
    </CartContext.Provider>
  );
};
