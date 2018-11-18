// External Packages
import React, { Component } from 'react';
import styled from "styled-components";

// Containers

// Components
import WhiteNavigationBarContainer from "./WhiteNavigationBarContainer";

// Styled Components 
import StyledLandingPage from "../styledComponents/StyledLandingPage";
import StyledBackgroundImageComponent from "../styledComponents/StyledBackgroundImageComponent";

// Constants
const StyledFinalBackground = styled(StyledBackgroundImageComponent)`
    height: 720px;
    width: 100%;
`;
// To modify in the future: height needs to be shifted. Can't be a magic number.
// This will suffice for now.

const backgroundImage =  require("../assets/backgrounds/StephenShore.jpg");


class LandingPage extends Component {
    render() {
      return (
       <StyledLandingPage>
            <WhiteNavigationBarContainer />
            <StyledFinalBackground src={backgroundImage} />
       </StyledLandingPage>
      );
    }
  }
  
  export default LandingPage;
  