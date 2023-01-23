import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, user } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
