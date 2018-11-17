// External Packages
import React, { Component } from 'react';
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";

// Containers
import WhiteNavigationBarContainer from "./WhiteNavigationBarContainer";

// Components
import ReadingListComponent from "../components/ReadingListComponent"
import PoliticsAjarComponent from "../components/PoliticsAjarComponent"
import TalentSpaceComponent from "../components/TalentSpaceComponent"
import ArtShopComponent from "../components/ArtShopComponent"
import DragonBallComponent from "../components/DragonBallComponent"
import FordhamComponent from "../components/FordhamComponent"
import TalentSpaceMainComponent from "../components/TalentSpaceMainComponent"

// Styled Components
import StyledHomeBackgroundComponent from "../styledComponents/StyledHomeBackgroundComponent";
import StyledAboutDivContainer from "../styledComponents/StyledAboutDivContainer";
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledAboutImage from "../styledComponents/StyledAboutImage";
import StyledAboutComponentSeparator from "../styledComponents/StyledAboutComponentSeparator";
import StyledAboutSecondRowStyling from "../styledComponents/StyledAboutSecondRowStyling";
import StyledWorkProjectContainer from "../styledComponents/StyledWorkProjectContainer";
import StyledWorkProjectHeader from "../styledComponents/StyledWorkProjectHeader";

// Constants
const StyledAboutBackgroundComponent = styled(StyledHomeBackgroundComponent)`
  background-color: black;
  padding-top: 20px; 
  padding-bottom: 100px;
  width: 100%;
`;
// Padding top: changes how far the first "Recent Work" is from the Navigation Bar
// Set to 20px in order to keep it close. 

const StyledAboutParagraphTitle = styled(StyledAboutParagraph)`
    font-size: 20px;
    font-style: bold;
    font-weight: 5;
`;

// Styling of second row is done Inline here because 
// 1. Isn't possible to mix styled components and react bootstrap elements
// 2. Putting all the CSS in another folder is uneccessary, being that inline styles are only used exceptionally.
const SecondRowStyling = {
    marginTop: "40px",
}

const SpotifyMargin = {
    marginBottom: "30px",
}

const ResizeStyling = {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
}

// Make size of all containers consistent because some are bigger
// Than others
class Work extends Component {
    render() {
      return (
       <div>
       {/* <WhiteNavigationBarContainer /> */}
       <StyledAboutBackgroundComponent>
        <StyledWorkProjectHeader> Recent Work </StyledWorkProjectHeader>
        <StyledAboutComponentSeparator>
            <TalentSpaceMainComponent />
        </StyledAboutComponentSeparator>
         <StyledWorkProjectHeader> Projects </StyledWorkProjectHeader>
         <Grid>  
            <Row style={ResizeStyling}>
                <Col md={4}  style={ResizeStyling} >
                    <StyledAboutComponentSeparator>
                        <FordhamComponent />
                    </StyledAboutComponentSeparator>
                </Col>

                 <Col md={4}>
                    <StyledAboutComponentSeparator>
                        <StyledWorkProjectContainer>
                            <PoliticsAjarComponent />
                        </StyledWorkProjectContainer>
                    </StyledAboutComponentSeparator>
                 </Col>

                <Col md={4}>
                    <StyledAboutComponentSeparator>
                     <StyledWorkProjectContainer>
                        <ArtShopComponent />
                      </StyledWorkProjectContainer>
                    </StyledAboutComponentSeparator>
                </Col>
            </Row>

            {/* <StyledAboutSecondRowStyling> */}
            <Row >
                <Col md={4} >
                </Col>

                <Col md={4}>
                    <StyledAboutComponentSeparator>
                        <StyledWorkProjectContainer>
                            <DragonBallComponent />
                        </StyledWorkProjectContainer>
                    </StyledAboutComponentSeparator>
                </Col> 
            </Row>
            {/* </StyledAboutSecondRowStyling> */}
         </Grid>
       </StyledAboutBackgroundComponent>
       </div>
      );
    }
  }
  
  export default Work;
  

