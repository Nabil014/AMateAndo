import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Registro from "./components/Registro/Registro.jsx";
import Login from "./components/Login/Login.jsx";
import { gapi } from "gapi-script";
import { useReducer, createContext } from "react";
import CartProvider from "./components/context/CartContext.js";

const clientId =
  "599718821872-hhje7rdvlv3cq5v55a1e2oe22ok6qd04.apps.googleusercontent.com";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/registro" component={Registro} />
          <Route path="/logearse" component={Login} />
          <Route path="/perfil" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
