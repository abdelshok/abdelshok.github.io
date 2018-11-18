// Packages
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

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
    <HashRouter>
      <Switch>
        <Route path="/" exact component={GeneralPageContainer} />
        <Route path="/about" exact component={GeneralPageContainer} />
        <Route path="/work" exact component={Work} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
