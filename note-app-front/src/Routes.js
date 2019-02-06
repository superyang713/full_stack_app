import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute/AppliedRoute";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import NewNote from "./containers/NewNote/NewNote";
import NotFound from "./containers/NotFound/NotFound";


export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps}/>
    <Route component={NotFound}/>
  </Switch>;
