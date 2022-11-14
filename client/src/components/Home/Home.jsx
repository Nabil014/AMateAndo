import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";

const Home = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // const [carrito, setCarrito] = useState([]);

  let userInfo = localStorage.getItem("userInfo");
  const userJson = JSON.parse(userInfo);

  // const addProduct = (item) => {
  //   setCarrito((prevState) => [...prevState, item]);
  // };
  // // agrega a localStorage:
  //  localStorage.setItem("cart", JSON.stringify(carrito))
  // const cart = localStorage.getItem("cart")
  // console.log(cart)
  // // const cartJson = JSON.parse(cart)
//-------------------------------
  // const addProduct = (item) => {
  //   const existItem = carrito.find((e) => e.name === item.name );
  //   if(existItem){
  //     existItem.quantity +=1
  //   } else{
  //     setCarrito((prevState) => [...prevState, item]);
  //   }

  //   console.log("carrito", carrito);
    
  //   // localStorage.setItem("cart", JSON.stringify(carrito));
  // }
  // console.log("carrito3",carrito)

  useEffect(() => {
    dispatch(getProduct(""));
    // if (localStorage.getItem("cart")) {
    //   const cartJson = JSON.parse(localStorage.getItem("cart"));
      // setCarrito(cartJson);
    // }
  }, [dispatch]);


  const [showShop, setShowShop] = useState(false);
  const toggleMenu = () => {
    setShowShop(!showShop);
  };
  return (
    <div>
      <NavBar toggleMenu={toggleMenu} />
      <div className=" pt-5 pb-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-gray-100 min-h-[calc(100vh-97px)] ">
        {products?.map((e) => {
          return (
            <Card
              // addProduct={}
              key={e.name}
              name={e.name}
              price={e.price}
              picture={e.picture}
              stock ={e.stock}
            />
          );
        })}
       
      </div>
    </div>
  );
};

export default Home;
