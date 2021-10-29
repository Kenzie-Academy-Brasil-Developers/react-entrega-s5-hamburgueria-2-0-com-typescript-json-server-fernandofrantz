import { Route, Switch } from "react-router";
import { Cart } from "../Pages/Cart";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};
