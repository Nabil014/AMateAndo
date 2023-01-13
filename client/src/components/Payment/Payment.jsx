import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import NavBar from "../NavBar/NavBar";
// import { useForm } from "react-hook-form";
import {payment} from "../../Redux/Actions/index"
import { useDispatch, useSelector } from "react-redux";
import MercadoPago from "./MercadoPago";

const Payment = () => {
  // const {} = useForm();
  const dispatch = useDispatch();
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  const [input, setInput] = useState({
    address:"",
    note: "",
  })
  const preference = useSelector((state) => state.preferenceId);

  const totalCart = cart
    .map((e) => e.quantity * e.unit_price)
    .reduce((p, current) => p + current, 0);

  const handlePay =()=>{
    dispatch(payment(cart))
  }
  const handleNote =(e)=>{
    setInput({
      ...input,
      note:e.target.value
    })
  }
  const handleAddress =(e)=>{
    setInput({...input, address:e.target.value})
  }
  return (
    <div>
      <NavBar />
      <div className="flex justify-around bg-slate-100 min-h-[calc(100vh-97px)] ">
        {/* Opciones de envio */}
        <div className="flex flex-col w-[50%] mt-10 justify-between">
          <div>
            <h2>Opciones de envio</h2>
            <form>
              <div className="bg-white h-16 mt-10 justify-between flex items-center">
                <input
                  type="text"
                  value={input.address}
                  placeholder="Direccion de envío"
                  onChange={handleAddress}
                  className="m-4 w-[80%] focus:outline-none text-[#06283D]"
                />
              </div>
              <div className="bg-white h-32 mt-10 justify-between flex items-center">
                <textarea
                  type="text"
                  value={input.note}
                  name='note'
                  placeholder="Agregar una observacion"
                  onChange={handleNote}
                  className="m-4 w-[100%] focus:outline-none h-24 text-[#06283D] resize-none"
                />
              </div>
            </form>
          </div>
          <div className="mb-16 flex justify-end">
            <button onClick={handlePay} className="mr-2 items-center flex border-solid border-[1px] p-3 py-4 h-7 rounded-lg bg-orange-300 text-[#06283D] border-orange-300 font-semibold ">Finalizar Compra</button>
            <MercadoPago preferenceId={preference}/>
          </div>
        </div>
        {/* Resumen de compra */}
        <div className=" bg-white min-h-[calc(screen-NavBar)] w-[25%] xl:block hidden">
          <h1 className="text-lg font-semibold mt-12 m-4">Resumen de compra</h1>
          <hr className="ml-4 justify-center items-center w-[87%]" />
          <div className="flex flex-col ">
            <div className="flex justify-between m-4">
              <h1>Productos({cart.length})</h1>
              <h1 className="mr-4">$ {totalCart},00</h1>
            </div>
            <div className="flex justify-between m-4 mt-0">
              <h1>Envío</h1>
              <h1 className="mr-4">$ 0,00</h1>
            </div>
          </div>
          <hr className="ml-4  justify-center items-center w-[87%]" />
          <div className="flex justify-between m-4 mt-5">
            <h1>Total</h1>
            <h1 className="mr-4">$ {totalCart},00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
