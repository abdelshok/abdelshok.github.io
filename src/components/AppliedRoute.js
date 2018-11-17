// ##########################################################################################
//
// DON'T UNDERSTAND THIS PART, SO COME BACK AND READ THIS
// This simple component creates a Route where the child
// component that it renders contains the passed in props. Let’s take a quick look at how this being done.
// https://serverless-stack.com/chapters/add-the-session-to-the-state.html
//
// ##########################################################################################

// Not using the "Component" suffix because it is more clear when we use it as a <Route /> in the route.js file.

// Packages
import React from "react";
import { Route } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => <C {...props} {...cProps} />} />
);
