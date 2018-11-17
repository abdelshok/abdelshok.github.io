// External Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// Internal Modules

// Components

// Styled Components
import StyledLeftLogoComponent from "../styledComponents/StyledLeftLogoComponent";
import StyledWhiteNavigationBarComponent from "../styledComponents/StyledWhiteNavigationBarComponent";
import RightNavigationBarContainerComponent from "../components/RightNavigationBarContainerComponent";
 
// Constants

class WhiteNavigationBarContainer extends Component {
    render() {
      return (
       <StyledWhiteNavigationBarComponent>
        <Link to="/"> <StyledLeftLogoComponent> ABDEL AZIZ SHOKAIR </StyledLeftLogoComponent> </Link>
        {/* <StyledNavigationBarLogoComponent src={logoImage} /> */}
        <RightNavigationBarContainerComponent />
       </StyledWhiteNavigationBarComponent>
      );
    }
  }
  
  export default WhiteNavigationBarContainer;
  