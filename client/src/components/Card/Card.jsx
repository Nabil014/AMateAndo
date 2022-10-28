import React, { useState } from "react";

export default function Card({ name, picture, price }) {


  const [product, setProduct] = useState({
    name,
    price,
    picture,
  });
  const [carrito, setCarrito] = useState([]);
  const addProduct = () => {
    setProduct({ name, price, picture });
    setCarrito([...carrito, product]);
    console.log(carrito)

// localStorage.setItem(`${name}`, JSON.stringify({carrito}))
  };

  return (
    <div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
      <div className="py-4 px-6 flex flex-col gap-2">
        <h1 href="#" className="text-2xl font-bold text-gray-700">
          {name}
        </h1>
      </div>
      <div>
        <img src={picture} alt="img" className="w-60 object-contain h-60" />
      </div>
      <div className="bg-orange-300 py-4 px-6 flex items-center justify-between rounded-bl-lg rounded-br-lg">
        <span className="text-gray-700 font-bold">$ {price}</span>
        <button
          onClick={() => addProduct()}
          className="text-gray-700 hover:text-white hover:bg-[#06283D] rounded-lg p-1 hover:duration-400 transition-colors duration-200 font-semibold outline-none hover:transition-colors"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
