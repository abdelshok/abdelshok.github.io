// Disclaimer:
// 1. This project uses mainly StyledComponents for styling. All of the styled components are stored in the styledComponents folder
// Some styled components/elements are extended in the different components and containers they are used in.
// This is due to the fact that they are re-used in different locations of the application, with minor variations.
// As a result, it is better to keep those elements within the files where they are specifically used.
// 2. Inline styling is used sporadically throughout the application when interacting with specific external components
// such as the React-Bootstrap components. There are other cases where they are used with internal components. Again, I deemed it 
// unecessary to create styledComponents for such specific use cases. 
// Clarity is here the aim and the rule of thumb, not the exception.

// External Packages
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import BackgroundSlideshow from 'react-background-slideshow';

// App Components
import TestComponent from "./components/TestComponent";
import Routes from "./Routes";
import NavigationBarContainer from "./containers/NavigationBarContainer";

// Styled Components
import StyledMetaAppComponent from "./styledComponents/StyledMetaAppComponent";

// Constants


class App extends Component {
  render() {
    return (
    // <BackgroundSlideshow 
    //   images={[ image1, image2, image3, image4, image5, image6 ]} 
    //   animatinDelay={2000}
    //   disableClick={true}
    //   >
    <StyledMetaAppComponent  >
      {/* <NavigationBarContainer /> */}
      <Routes />
    </StyledMetaAppComponent>
    // </BackgroundSlideshow>
    );
  }
}

export default App;
