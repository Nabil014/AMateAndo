import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import Orders from "../Orders/Orders";

const Home = ({ name, price, picture }) => {
  const products = useSelector((state) => state.product);
  let userInfo = localStorage.getItem("userInfo");
  const userJson = JSON.parse(userInfo);

  const [carrito, setCarrito] = useState([]);
  const addItem = (item) => {
    console.log("item",item)
    setCarrito((prevCarrito) => [...prevCarrito, item]);
  };

  console.log(carrito);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(""));
  }, [dispatch]);
  const [showShop, setShowShop] = useState(false);
  const toggleMenu = () => {
    setShowShop(!showShop);
  };
  return (
    <div>
      <NavBar toggleMenu={toggleMenu} />
      <Orders showShop={showShop} />
      <div className=" pt-5 pb-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-gray-100 min-h-[calc(100vh-97px)] ">
        {products?.map((e) => {
          return (
            <Card
              addItem={addItem}
              key={e.name}
              name={e.name}
              price={e.price}
              picture={e.picture}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
