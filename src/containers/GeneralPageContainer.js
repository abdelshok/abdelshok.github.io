// External Packages
import React, { Component } from 'react';

// Internal Modules

// Components
import About from "./About";
import Work from "./Work";
import LandingPage from "./LandingPage";
import ContactMe from "./ContactMe";

class GeneralPageContainer extends Component {
    render() {
      return (
       <div>
           <LandingPage />
           <About />
           <Work />
           <ContactMe />
       </div>
      );
    }
  }
  
  export default GeneralPageContainer;
  