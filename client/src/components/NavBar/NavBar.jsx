import React, { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../Redux/Actions/index";
import logo from "../../assets/fondo.jpeg";
import {
  RiSearchLine,
  RiLogoutCircleRLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiCloseCircleLine } from "react-icons/ri";
import { ImUserPlus, ImUserCheck } from "react-icons/im";
import CartWidget from "../CartWidget/CartWidget";
import Cart from "../Cart/Cart";

const NavBar = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const [showCart, setShowCart]= useState(false)

  let userInfo = localStorage.getItem("userInfo");
  useEffect(() => {
    dispatch(getProduct(product));
  }, [product]);

  function inputSearch(e) {
    setProduct(e.target.value);
  }
  
 

  function clearInput(){
    setProduct("");
  }

  const location = window.location.pathname;
  const handleOnClose = () => setShowCart(false)
  
  return (
    <div className="sm:p-0 z-2 bg-orange-300 h-25 w-full flex items-center justify-between xl:px-4 md:px-4 border-b-[1px] border-[#06283D] border-solid">
      <Link to="/">
        <img
          src={logo}
          alt="img"
          className="h-[6rem] w-[6rem] cursor-pointer relative -z-1"
        />
      </Link>

      {
        <div>
          {location === "/" ? (
            <div className=" relative block group">
              <input
                placeholder="Buscar.."
                onChange={inputSearch}
                className="outline-none text-[#06283da8] font-normal focus:border-[#06283da8] focus:ring-[#06283db2] focus:ring-2 focus:shadow-lg focus:scale-105 transition-all py-1 pl-10 pr-4 rounded-full italic"
                type="text"
                value={product}
              />
                <RiSearchLine className="absolute left-3 top-1/4 -traslate-y-1/2 text-[#06283D] group-focus-within:-translate-x-2 group-focus-within:text-xl group-focus-within:justify-center group-focus-within:top-1 transition-all" />
              {product !== "" ? <RiCloseCircleLine onClick={clearInput} className="absolute cursor-pointer right-2 top-1/4 -traslate-y-1/2 text-red-500 hover:scale-110 hover:transition-all transition-all rounded-full"/>: ""}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      }
      <div className="flex flex-row-reverse">
        <Menu as="div">
          <Menu.Button className="hover:bg-orange-200 p-2 rounded-full transition-colors relative">
            <CgProfile className="text-2xl text-[#06283D]" />
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {userInfo === null ? (
              <Menu.Items
                as="section"
                className="w-40 h-[4.5rem] bg-gray-100 right-8 -top-2 absolute rounded-lg border-[#06283db7] border-t-[.5px] border-b-[.5px]"
              >
                <div>
                  <Link to={"/registro"}>
                    <Menu.Item>
                      <div className="flex gap-2 m-1 mt-2 hover:bg-white">
                        <ImUserPlus className="flex mt-1" />
                        <button>Registrarse</button>
                      </div>
                    </Menu.Item>
                  </Link>
                  <Menu.Item>
                    <Link to="/logearse">
                      <div className="flex gap-2 m-1 hover:bg-white">
                        <ImUserCheck className="flex mt-1" />
                        <button>Iniciar Sesión</button>
                      </div>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            ) : (
              <Menu.Items
                as="section"
                className="w-40 bg-gray-100 right-8 -top-2 absolute rounded-lg border-[#06283db7] border-t-[.5px] border-b-[.5px]"
              >
                <div>
                  <Link to={"/perfil"}>
                    <Menu.Item>
                      <div className="flex gap-2 m-1 mt-2 hover:bg-white">
                        <BsFillPersonFill className="flex mt-1" />
                        <button>Perfil</button>
                      </div>
                    </Menu.Item>
                  </Link>
                  <Menu.Item>
                    <Link to="/">
                      <div className="flex gap-2 m-1 hover:bg-white">
                        <RiLogoutCircleRLine className="flex mt-1" />
                        <button
                          onClick={() => {
                            localStorage.removeItem("userInfo");
                            localStorage.removeItem("cart");
                          }}
                        >
                          Cerrar Sesion
                        </button>
                      </div>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            )}
          </Transition>
        </Menu>
        {userInfo === null ? (
          <div></div>
        ) : (
              <div>
                <button onClick={()=>setShowCart(true)}>
                  <CartWidget />
                </button>
                  <Cart onClose={handleOnClose} visible={showCart}/>
              </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
