import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.js";
import NotFound from "./containers/NotFound.js";


export default () =>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route component={NotFound}/>
  </Switch>;

