import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path={"/"}>
      <Redirect to={"/login"} />
    </Route>
  </Switch>
);

export default Routes;
