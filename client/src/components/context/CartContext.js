import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    if (cart.some((el) => el.name === item.name)) {

      let index = cart.findIndex((el) => el.name === item.name);
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);
      setCart([...newCart]);

    } else {
      let product = { ...item, qty };
      setCart([...cart, product]);
    }
  };

  const deleteCart = () => {
    setCart([]);
  };

  const deleteItem = (name) => {
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.name === name);
    newCart.splice(index, 1);
    setCart([...newCart]);
  };

  const refreshQty = (name,qty2) =>{

    let index = cart.findIndex((el) => el.name === name);
      let product = cart[index];
      product.qty = product.qty + qty2;
        
        const newCart = [...cart];
        newCart.splice(index, 1, product);
        setCart([...newCart]);
  }
  useEffect(()=>{
    const dataCart = JSON.parse(localStorage.getItem('cart'))
    if(dataCart){
      setCart(dataCart)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, deleteCart, deleteItem,refreshQty }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
