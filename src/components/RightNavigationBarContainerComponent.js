// External Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Internal Modules

// Components

// Styled Components 
import StyledRightHeaderLinkContainer from "../styledComponents/StyledRightHeaderLinkContainer";
import StyledRightLinkComponent from "../styledComponents/StyledRightLinkComponent";

// CSS styling done here and not in Styled Components folder because we are directly
// modifying the styling of the React-router-dom provided Link component, not a simple Div, p, or a element

const LinkStyling = {
  textDecoration: "none"
}

class RightNavigationBarContainerComponent extends Component {
    render() {
      return (
       <StyledRightHeaderLinkContainer> 
           <Link to="/work" style = {LinkStyling} > <StyledRightLinkComponent> + Projects </StyledRightLinkComponent> </Link>
           <Link to="/about" style = {LinkStyling} > <StyledRightLinkComponent> About / Contact </StyledRightLinkComponent> </Link>
           <StyledRightLinkComponent> Talks </StyledRightLinkComponent>
       </StyledRightHeaderLinkContainer>
      );
    }
  }
  
  export default RightNavigationBarContainerComponent;
  