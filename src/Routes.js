// Packages
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// Internal modules

// Components

// Containers

import GeneralPageContainer from "./containers/GeneralPageContainer";



const Routes = props => {

  return (
      <Switch>
        <Route path="/" exact component={GeneralPageContainer} />
      </Switch>
  );
};

export default Routes;
