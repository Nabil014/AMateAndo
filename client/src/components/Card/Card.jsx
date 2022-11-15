import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function Card(item) {
  const {name, picture, price} = item;
  const cartContext = useContext(CartContext)
  const {cart, addToCart}= cartContext

  const onAdd=(qty)=>{
    addToCart(item,qty)
  }

  return (
    <div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl hover:shadow-2xl">
      <div className="py-4 px-6 flex flex-col gap-2">
        <h1 href="#" className="text-2xl font-bold text-gray-700">
          {name}
        </h1>
      </div>
      <div className="flex justify-center items-center pb-2">
        <img src={picture} alt="img" className="w-60 object-contain h-60 " />
      </div>
      <div className="bg-orange-300 p-2 flex rounded-bl-lg rounded-br-lg flex-col">
        <span className="text-gray-700 font-bold text-xl mb-2 text-center">$ {price},00</span>
        <ItemCount cart={cart} stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
}
