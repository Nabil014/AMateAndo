import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import Confetti from "react-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "../Logout/Logout";
const clientId =
  "599718821872-hhje7rdvlv3cq5v55a1e2oe22ok6qd04.apps.googleusercontent.com";

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    profile_loaded: false,
    conffeti: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState({
    msgNotRegister: "",
  });

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push(`/`);
    }
  }, [history]);
  const onSuccess = async (res) => {
    console.log("LOGIN Success! Current user: ", res.profileObj);
    if (res.tokenId) {
      const onSuccess = await axios.post("/api/login/google", {
        token: res.tokenId,
        name: res.profileObj.givenName,
        lastName: res.profileObj.familyName,
        email: res.profileObj.email,
        profile_loaded: true,
      });
      if (Object.keys(onSuccess.data).length !== 0) {
        const { name, email, token } = onSuccess.data;
        setState({
          ...state,
          name,
          email,
          token,
          profile_loaded: true,
          confetti: true,
        });
        toast.success("Iniciaste sesion", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        alert("Por favor ingrese todos los campos");
        // Swal(
        //   'Por favor ingrese todos los campos','','warning',{buttons:false,timer:3500}
        // )
      }
      // const users = await axios.get(`/api/user/${email}`);
      // console.log(users);
      // if (users.data.length === 0)
      //   return setMsg({
      //     ...msg,
      //     msgNotRegister: "Correo no está registrado",
      //     msgNotVerify: "",
      //   });
      // if (users.data[0].Visibility === false)
      //   return setMsg({
      //     ...msg,
      //     msgBan: "Tu usuario ha sido baneado de Nomade.",
      //   });
      // if (users.data[0].verified === false)
      //   return setMsg({
      //     ...msg,
      //     msgNotVerify: "Tu correo no esta verificado",
      //     msgNotRegister: "",
      //   });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        // `/api/login`,
        "http://localhost:3000/api/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setEmail("");
      setPassword("");
      history.push("/");
    } catch (error) {
      alert("Usuario o contraseña incorrectos");
      // Swal(
      //   'Usuario o contraseña incorrecta','','error',{buttons:false,timer:3500}
      // )
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, conffeti: false });
    }, 3000);
  }, [state.profile_loaded]);

  const onFailure = (error) => {
    alert(error);
  };
  return (
    <div>
      <div className="min-h-screen bg-[#F2F4FE] flex items-center justify-center p-4">
        <div className="max-w-lg">
          <div className="bg-white w-full rounded-lg p-8 mb-8">
            <div className="flex flex-col items-center gap-1 mb-8">
              <h1 className="text-xl text-gray-900">Bienvenido</h1>
              <p className="text-gray-400 text-sm">
                Ingresa con tu correo electrónico y tu contraseña
              </p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={submitHandler}>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  className="w-full border py-2 px-10 rounded-md outline-none"
                  placeholder="Ingresa tu correo"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  className="w-full border py-2 px-10 rounded-md outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
            <ToastContainer
              position="top"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              pauseOnHover={false}
              draggable
            />
            {!state.profile_loaded ? (
              <div>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
              </div>
            ) : (
              <div>
                {state.conffeti ? (
                  <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                  />
                ) : null}
                <h3>{state.name}</h3>
                <h3>{state.email}</h3>
                <h3>{state.token}</h3>
                <Logout />
              </div>
            )}
          </div>
          <span className="flex items-center justify-center gap-2">
            ¿Olvidaste tu contraseña?{" "}
            <a href="#" className="text-blue-500">
              Recuperar
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
