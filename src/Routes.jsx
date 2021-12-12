import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import { Product } from "./pages/Product";
import Shop from "./pages/Shop";

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/product" component={Product}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
