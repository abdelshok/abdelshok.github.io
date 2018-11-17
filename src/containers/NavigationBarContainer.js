// External Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// Internal Modules

// Components

// Styled Components
import StyledLeftLogoComponent from "../styledComponents/StyledLeftLogoComponent";
import StyledNavigationBarComponent from "../styledComponents/StyledNavigationBarComponent";
import RightNavigationBarContainerComponent from "../components/RightNavigationBarContainerComponent";
import StyledNavigationBarLogoComponent from "../styledComponents/StyledNavigationBarLogoComponent";
 
// Constants
const logoImage =  require("../assets/backgrounds/le_faux_miroir.gif");

const LinkStyling = {
  textDecoration: "none"
}



class NavigationBarContainer extends Component {
    render() {
      return (
       <StyledNavigationBarComponent>
        <Link to="/"> <StyledLeftLogoComponent> ABDEL AZIZ SHOKAIR </StyledLeftLogoComponent> </Link>
        {/* <StyledNavigationBarLogoComponent src={logoImage} /> */}
        <RightNavigationBarContainerComponent />
       </StyledNavigationBarComponent>
      );
    }
  }
  
  export default NavigationBarContainer;
  