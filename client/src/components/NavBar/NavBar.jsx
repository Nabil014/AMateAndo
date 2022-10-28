import React, { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
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
import { ImUserPlus, ImUserCheck } from "react-icons/im";

const NavBar = ({toggleMenu }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  let userInfo = localStorage.getItem("userInfo");
  useEffect(() => {
    dispatch(getProduct(""));
  }, [dispatch]);

  function handleInputChange(e) {
    setProduct(e.target.value);
  }
  function handleSubmit(e) {
    dispatch(getProduct(product));
    setProduct("");
  }
  const location = window.location.pathname;

 
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
            <div className="relative">
              <input
                placeholder="Buscar.."
                onChange={handleInputChange}
                className="outline-none py-1 pl-10 pr-4 rounded-full"
                type="text"
                value={product}
              />
              <button type="submit" onClick={(e) => handleSubmit(e)}>
                <RiSearchLine className="absolute left-4 top-1/4 -traslate-y-1/2 text-[#06283D]" />
              </button>
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
            <Link to={"/"}>
              <div>
                <button onClick={toggleMenu} className="hover:bg-orange-200 p-2 rounded-full transition-colors relative" >
                  <RiShoppingCartLine className="text-2xl text-[#06283D]" />
                </button>
              </div>
            </Link>
           
        )}
      </div>
    </div>
  );
};

export default NavBar;
