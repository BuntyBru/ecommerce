import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket, user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("User", authUser.email);
        console.log("IF CASE===>", authUser);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        console.log("ELSE CASE===>");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {};
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
