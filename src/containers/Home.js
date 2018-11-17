// External Packages
import React, { Component } from 'react';

// Internal Modules

// Components
import NavigationBarContainer from "./NavigationBarContainer";

// Styled Components
import StyledLeftLogoComponent from "../styledComponents/StyledLeftLogoComponent";
import StyledNavigationBarComponent from "../styledComponents/StyledNavigationBarComponent";
import RightNavigationBarContainerComponent from "../components/RightNavigationBarContainerComponent";
import StyledBackgroundImageComponent from "../styledComponents/StyledBackgroundImageComponent";
import StyledHomeBackgroundComponent from "../styledComponents/StyledHomeBackgroundComponent";

// const backgroundImage =  require("../assets/backgrounds/le_faux_miroir.gif");
// const backgroundImage =  require("../assets/backgrounds/paris.jpg");
// const backgroundImage =  require("../assets/backgrounds/chalkboard.jpg");
// const backgroundImage =  require("../assets/backgrounds/static.jpg");
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
  