// External Packages
import React, { Component } from 'react';

// Internal Modules

// Components
import About from "./About";
import Work from "./Work";
import LandingPage from "./LandingPage"



class GeneralPageContainer extends Component {
    render() {
      return (
       <div>
           <LandingPage />
           <About />
           <Work />
       </div>
      );
    }
  }
  
  export default GeneralPageContainer;
  