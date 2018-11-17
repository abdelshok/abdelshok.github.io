// External Packages
import React, { Component } from 'react';

// Containers
import About from "./About";
import Work from "./Work";

// Components
import WhiteNavigationBarContainer from "./WhiteNavigationBarContainer";

// Styled Components 
import StyledLandingPage from "../styledComponents/StyledLandingPage";


class LandingPage extends Component {
    render() {
      return (
       <StyledLandingPage>
            <WhiteNavigationBarContainer />
       </StyledLandingPage>
      );
    }
  }
  
  export default LandingPage;
  