// External Packages
import React, { Component } from 'react';

// Internal Modules

// Components
import NavigationBarContainer from "./NavigationBarContainer";

// Styled Components
import StyledHomeBackgroundComponent from "../styledComponents/StyledHomeBackgroundComponent";

const backgroundImage =  require("../assets/backgrounds/palms.jpg");


class Home extends Component {
    render() {
      return (
       <StyledHomeBackgroundComponent>
            <NavigationBarContainer />
            {/* <StyledBackgroundImageComponent src={backgroundImage} /> */}
       </StyledHomeBackgroundComponent>
      );
    }
  }
  
  export default Home;
  