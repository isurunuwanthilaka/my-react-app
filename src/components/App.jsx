import React from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Error from "./Error/Error";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
