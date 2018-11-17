// Packages
import React from "react";
import { Route, Switch } from "react-router-dom";

// Internal modules

// Components
import AppliedRoute from "./components/AppliedRoute";
import TestComponent from "./components/TestComponent";

// Containers
import Home from "./containers/Home";
import About from "./containers/About";
import Work from "./containers/Work";
import GeneralPageContainer from "./containers/GeneralPageContainer";



const Routes = props => {

  return (
    <Switch>
      <AppliedRoute path="/" exact component={GeneralPageContainer} />
      <AppliedRoute path="/about" exact component={GeneralPageContainer} />
      <AppliedRoute path="/work" exact component={Work} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
};

export default Routes;
