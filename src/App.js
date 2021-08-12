import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import PrivateRoute from "./components/Route/PrivateRoute";
import Routes from "./components/Route/Routes";
import { history } from "./store/store";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route  
        exact
        path={"/login"}
        render={(props) => <LoginPage {...props} />}
      />
      <PrivateRoute path={"/"} component={Routes} />
      <PrivateRoute component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default App;
