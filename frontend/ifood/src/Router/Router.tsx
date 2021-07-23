import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from "../pages/Home";

const RouterComponent = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
};

export default RouterComponent;
