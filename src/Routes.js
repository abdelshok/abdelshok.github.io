// Packages
import React from "react";
import { HashRouter, Route, Switch, Router } from "react-router-dom";

// Internal modules

// Components

// Containers

import GeneralPageContainer from "./containers/GeneralPageContainer";



const Routes = props => {
  return (
      <Router>
        <Route path="/" exact component={GeneralPageContainer} />
      </Router>
  );
};

export default Routes;
