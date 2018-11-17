// External Packages
import React, { Component } from 'react';
import styled from "styled-components";
import { Grid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col, Clearfix } from "react-bootstrap";
import SpotifyPlayer from 'react-spotify-player';

// Containers
import WhiteNavigationBarContainer from "./WhiteNavigationBarContainer";
import Work from "./Work";

// Components
import SkillsComponent from "../components/SkillsComponent";
import EducationComponent from "../components/EducationComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ReadingListComponent from "../components/ReadingListComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import FollowMeComponent from "../components/FollowMeComponent";

// Styled Components
import StyledHomeBackgroundComponent from "../styledComponents/StyledHomeBackgroundComponent";
import StyledAboutDivContainer from "../styledComponents/StyledAboutDivContainer";
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledAboutImage from "../styledComponents/StyledAboutImage";
import StyledAboutComponentSeparator from "../styledComponents/StyledAboutComponentSeparator";
import StyledAboutSecondRowStyling from "../styledComponents/StyledAboutSecondRowStyling";
import StyledAboutContainer from "../styledComponents/StyledAboutContainer";

// Constants

const StyledAboutBackgroundComponent = styled(StyledHomeBackgroundComponent)`
  background-color: rgb(24,24,24); 
  padding-top: 60px;
`;
// Slight grey

const StyledAboutParagraphTitle = styled(StyledAboutParagraph)`
    font-size: 20px;
    font-style: bold;
    font-weight: 5;
`;

// Styling of second row is done Inline here because 
// 1. Isn't possible to mix styled components and react bootstrap elements
// 2. Putting all the CSS in another folder is uneccessary, being that inline styles are only used exceptionally.
const SecondRowStyling = {
    marginTop: "100px",
}

const SpotifyMargin = {
    marginBottom: "30px",
}

const ResizeStyling = {
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto"
}

const aboutImage =  require("../assets/backgrounds/palmsAbdel2.jpg");


class About extends Component {
    render() {
      return (
       <StyledAboutContainer>
       <StyledAboutBackgroundComponent>
            {/* <StyledAboutDivContainer > */}
        <Grid>  
            <Row style={ResizeStyling}>
                <Col md={4}  lg={4} s={6} xs={12} style={ResizeStyling} >
                    <StyledAboutComponentSeparator>
                        <DescriptionComponent />
                    </StyledAboutComponentSeparator>
                </Col>

                <Col  md={4}  lg={4} s={6} xs={12} >
                    <StyledAboutComponentSeparator>
                        <SkillsComponent />
                    </StyledAboutComponentSeparator>
                 </Col>

                 <Col  md={4}  lg={4} s={6} xs={12} >
                    <StyledAboutComponentSeparator>
                        <StyledAboutImage src={aboutImage} />
                    </StyledAboutComponentSeparator>
                 </Col>
            </Row>

            <StyledAboutSecondRowStyling>
            <Row >
                <Col  md={4}  lg={4} s={6} xs={12} >
                    <StyledAboutComponentSeparator>
                        {/* <ExperienceComponent /> */}
                        <EducationComponent />
                    </StyledAboutComponentSeparator>
                </Col>

                <Col  md={4}  lg={4} s={4} xs={6}  >
                    <StyledAboutComponentSeparator>
                        <ReadingListComponent />
                    </StyledAboutComponentSeparator>
                </Col>

                <Col  md={4}  lg={4} s={6} xs={12} >
                    <StyledAboutComponentSeparator>
                        <FollowMeComponent />
                    </StyledAboutComponentSeparator>
                </Col> 
            </Row>
            </StyledAboutSecondRowStyling>
         </Grid>
         {/* </StyledAboutDivContainer> */}
       </StyledAboutBackgroundComponent>
       </StyledAboutContainer>
      );
    }
  }
  
  export default About;
  

// <SpotifyPlayer
//     uri="spotify:user:1257405229:playlist:3yq79bLZW8qcjuCeugaO0n"
//     size={spotifySize}
//     view={view}
//     theme={theme}
//     style = {SpotifyMargin}
//  /> 

                    // size may also be a plain string using the presets 'large' or 'compact'
// const spotifySize = {
//     width: '100%',
//     height: 300,
//   };

// const theme = "white"
// const view = 'list';