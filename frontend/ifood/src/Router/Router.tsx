import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";
import Basket from "../pages/Basket";

const RouterComponent = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/restaurante/:id"
        render={(props: any) => <Restaurant {...props} />}
      />
      <Route exact path="/cesta">
        <Basket />
      </Route>
    </Router>
  );
};

export default RouterComponent;
