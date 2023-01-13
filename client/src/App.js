import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Registro from "./components/Registro/Registro.jsx";
import Login from "./components/Login/Login.jsx";
import { gapi } from "gapi-script";
import CartProvider from "./components/context/CartContext.js";
import Payment from "./components/Payment/Payment.jsx";
import Status from "./components/Payment/Status.jsx"
const clientId =
  "599718821872-hhje7rdvlv3cq5v55a1e2oe22ok6qd04.apps.googleusercontent.com";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/registro" component={Registro} />
          <Route path= "/status" component={Status}/>
          <Route path="/pagar" component={Payment} />
          <Route path="/logearse" component={Login} />
          <Route path="/perfil" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
