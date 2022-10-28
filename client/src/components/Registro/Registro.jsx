import React, { useState, useEffect } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { postUser } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar/NavBar"

const Registro = () => {
  const [show, setShow] = useState(false);
  const switchShow = () => setShow(!show);
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    password: "",
    email: "",
    cellPhone: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setInput({
      name: "",
      lastName: "",
      password: "",
      email: "",
    });
  }, []);
  function handleName(e) {
    setInput({
      ...input,
      name: e.target.value,
    });
  }
  function handleLastname(e) {
    setInput({
      ...input,
      lastName: e.target.value,
    });
  }

  function handlePassword(e) {
    setInput({
      ...input,
      password: e.target.value,
    });
  }
  function handleEmail(e) {
    setInput({
      ...input,
      email: e.target.value,
    });
  }
  function handleCellPhone(e) {
    setInput({
      ...input,
      cellPhone: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postUser(input));
    setInput({
      name: "",
      lastName: "",
      password: "",
      email: "",
      cellPhone: "",
    });
  }
  return (
    <div>
      <NavBar/>
    <form onSubmit={handleSubmit}>
      <div className=" bg-gray-100 min-h-screen p-24">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="border bg-transparent focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label className="bg-transparent text-gray-600 px-1">
                  Nombre *
                </label>
              </p>
            </div>
            <p>
              <input
                name="name"
                value={input.name}
                onChange={handleName}
                required
                type="text"
                className="py-1 px-1 bg-transparent text-gray-900 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div className="border bg-transparent focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label className="bg-transparent mb-10 text-gray-600 px-1">
                  Apellido *
                </label>
              </p>
            </div>
            <p>
              <input
                id="lastname"
                value={input.lastName}
                onChange={handleLastname}
                required
                type="text"
                className="py-1 px-1 bg-transparent outline-none block h-full w-full"
              />
            </p>
          </div>
          <div className="border bg-transparent focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label className="bg-transparent text-gray-600 px-1">
                  Email *
                </label>
              </p>
            </div>
            <p>
              <input
                id="email"
                value={input.email}
                onChange={handleEmail}
                type="text"
                required
                className="py-1 px-1 bg-transparent outline-none block h-full w-full"
              />
            </p>
          </div>
          <div className="border bg-transparent focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label className="bg-transparent text-gray-600 px-1">
                  Celular *
                </label>
              </p>
            </div>
            <p>
              <input
                id="celular"
                value={input.cellPhone}
                onChange={handleCellPhone}
                type="number"
                required
                className="py-1 bg-transparent px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div className="border bg-transparent focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label className="bg-transparent text-gray-600 px-1">
                  Contraseña *
                </label>
              </p>
            </div>
            <p>
              <input
                id="password"
                value={input.password}
                onChange={handlePassword}
                required
                type={show ? "text" : "password"}
                className="py-1 bg-transparent px-1 outline-none block h-full w-full"
              />
              <div className="flex top-3 right-6 absolute">
                <button className="absolute" type="button" onClick={switchShow}>
                  {show ? <RiEyeFill /> : <RiEyeOffFill />}
                </button>
              </div>
            </p>
          </div>
        </div>
        <div className="border-t mt-6 pt-3 items-center justify-center flex">
          <button className="rounded text-white px-3 py-1 bg-orange-500 hover:shadow-inner hover:bg-orange-400 transition-all duration-300">
            Registrarme
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Registro;
