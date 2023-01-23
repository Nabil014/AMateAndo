import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Actions/index";
import Products from "../Products/Products";
import LoginProfile from "../Login/LoginProfile";

const Home = () => {
  const dispatch = useDispatch();

  let userInfo = localStorage.getItem("userInfo");
  const userJson = JSON.parse(userInfo);

  useEffect(() => {
    dispatch(getProduct(""));
  }, []);

  const [showShop, setShowShop] = useState(false);
  const toggleMenu = () => {
    setShowShop(!showShop);
  };
  return (
    <div className=" bg-gray-100 min-h-screen ">
      <NavBar toggleMenu={toggleMenu} />
      <Products />
    </div>
  );
};

export default Home;
