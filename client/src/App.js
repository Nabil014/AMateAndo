import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Registro from "./components/Registro/Registro.jsx";
import Login from "./components/Login/Login.jsx";
import { gapi } from "gapi-script";
import CartProvider from "./components/context/CartContext.js";
import Payment from "./components/Payment/Payment.jsx";
import Status from "./components/Payment/Status.jsx"
import Details from "./components/Details/Details.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/registro" component={Registro} />
          <Route path="/product/:id" component={Details} />
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
