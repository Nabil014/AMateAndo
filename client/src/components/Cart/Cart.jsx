import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  RiDeleteBinLine,
  RiCloseCircleLine,
  RiCloseFill,
} from "react-icons/ri";
import { useEffect } from "react";

const Cart = ({ visible, onClose }) => {
  const cartContext = useContext(CartContext);
  const { cart, deleteItem, refreshQty } = cartContext;
  const [checkStockMenor, setCheckStockMenor]= useState(false)
  const [checkStockMayor, setCheckStockMayor]= useState(false)


  const totalCart = cart
    .map((e) => e.qty * e.price)
    .reduce((p, current) => p + current, 0);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const refreshQty2 = (name, num) => {
    let index = cart.findIndex((el) => el.name === name);
      let product = cart[index];
      // if(product.qty === 1) setCheckStockMenor(true)
      // if(product.qty === product.stock) setCheckStockMayor(true)
      // if(product.qty <= product.stock && product.qty >= product.stock) {
        refreshQty(name, num);
        // setCheckStockMayor(false)
        // setCheckStockMenor(false)
      // }
    }
    
  
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white w-[75vw] p-2 rounded xl:w-[75vw] xl:h-[75vh]  md:w-[75vw] relative h-[55vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-3 mt-2 box-content text-xl hover:scale-110 transition-transform"
        >
          <RiCloseFill />
        </button>
        <h1 className="mt-4 m-2 text-lg">
          Productos en el carrito ({cart.length})
        </h1>

        {cart.length !== 0 ? (
          cart.map((e) => {
            return (
              <div key={e.name}>
                <div className="flex justify-around items-center">
                  <img
                    src={e.picture}
                    alt="img"
                    className="w-16 xl:w-24 md:w-24 h-24 object-contain rounded-lg shadow-lg"
                  />
                  <h1 className="text-lg font-semibold">{e.name}</h1>
                  <button onClick={() => refreshQty2(e.name, -1)} disabled={checkStockMenor}>-</button>
                  <p>{e.qty}</p>
                  <button onClick={() => refreshQty2(e.name, +1)} disabled={checkStockMayor}>+</button>
                  <span className="font-semibold">$ {e.price},00</span>
                  <button onClick={deleteItem}>
                    <RiDeleteBinLine className="text-xl hover:text-red-500 transition-colors" />
                  </button>
                </div>
                <hr className="m-2" />
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-[30vh]">
            <h1 className="text-[#666666] text-2xl tracking-[0.5px]">
              Aún no tienes productos en el carrito
            </h1>
          </div>
        )}
        <div className="flex justify-end xl:m-5 xl:mr-20 lg:m-5 lg:mr-16 md:m-5 md:mr-10 text-lg mr-4 font-bold text-[#06283D]">
          <h1 className=" mr-8">Total a pagar: </h1>
          <span className="">$ {totalCart},00</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
