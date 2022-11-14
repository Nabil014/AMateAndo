import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);
  const [showButton, setShowButton] = useState(false);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div>
      <div className="flex gap-2 justify-between items-center">
        <button
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : false}
          className={qty === initial ?"bg-orange-300 text-orange-300": "bg-[#06283D] px-2 pb-0.5 rounded-full text-white font-semibold"}
        >
          -
        </button>
        <span className="flex justify-center items-center font-semibold">{qty}</span>
        <button
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : false}
          className={qty === stock ? "bg-orange-300 text-orange-300":"bg-[#06283D] px-1.5 pb-0.5 rounded-full text-white font-semibold"}
        >
          +
        </button>
        <button onClick={()=>{onAdd(qty); setShowButton(true)}} disabled={stock===0 ? true:false} className="text-gray-700 hover:text-white hover:bg-[#06283D] rounded-lg p-1 hover:duration-400 transition-colors duration-200 font-semibold outline-none hover:transition-colors ml-4">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
