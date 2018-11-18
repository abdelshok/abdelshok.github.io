// Component that will hold information for Politics Ajar Project
// Used in Work.js container

// Packages
import React from "react";
import styled from "styled-components";
import { Grid, Row, Col, Carousel } from "react-bootstrap";

// Styled Components
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledWorkProjectImage from "../styledComponents/StyledWorkProjectImage";
import StyledWorkProjectGithubLogo from "../styledComponents/StyledWorkProjectGithubLogo";
import StyledWorkProjectMainContainer from "../styledComponents/StyledWorkProjectMainContainer";
import StyledTalentSpaceDescription from "../styledComponents/StyledTalentSpaceDescription";


const ProjectDescription = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 400;
    line-height: 1em;
    width: 300px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
`;

const TechnologyList = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 600;
    font-style: bold;
    line-height: 1em;
    max-width: 300px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
`;

const DescriptionText = styled(StyledAboutParagraph)`
font-size: 16px;
font-weight: 500;
font-style: normal;
line-height: 1em;
text-align: justify;
margin-left: auto;
margin-right: auto;
width: 300px;
`;

// Margin left and right auto can be deleted it above to push the text to the left

const testStyling = {
    backgroundColor: "black",
}

const TalentSpace1 = require("../assets/backgrounds/TalentSpace1.png");
const TalentSpace2 = require("../assets/backgrounds/TalentSpace2.png");
const TalentSpace3 = require("../assets/backgrounds/TalentSpace3.png");

// Inline styling so that the carousel is layed out correctly within the container
// Used in the 
const MainProjectStyling = {
    marginLeft: "10px",
    marginTop: "20px",
    height: "350px",
}

const ImageStyling = {
    height: "350px",
}

const TalentSpaceMainComponent = () => (
  <StyledWorkProjectMainContainer>
    <Grid>
        <Row >
            <Col md={6}>
            <Carousel style={MainProjectStyling} >
                <Carousel.Item>
                    <img width={1000} height={1000}  src={TalentSpace1} style={ImageStyling} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1000} height={1000} src={TalentSpace2} style={ImageStyling} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1000} height={1000} src={TalentSpace3} style={ImageStyling} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>;
            </Col> 
            <Col md={6}>
                <StyledTalentSpaceDescription style={MainProjectStyling} >
                    <DescriptionText>
                    I moved to Berlin last summer to start a role as a Full Stack Software Engineer at Talent Space, a career accelerator that pairs talented job seekers with top tech companies in Europe. Starting from scratch, I created their new React web app, using StyledComponents for styling, Storybook for UI testing, and React-Bootstrap. On the backend, I created AWS Lambda functions using the Serverless Framework, implemented the Twilio API for secure messaging, used AWS Cognito/Amplify for user management and  DynamoDB as a nonrelational database. 
                    <br/>
                    <br/>
                    Features I’ve implemented include Login/Signup using AWS Amplify, the Talent Dashboard with a slider menu, optimized for mobile and desktop usage, and the responsive displaying grid for upcoming events.
                    </DescriptionText>
                </StyledTalentSpaceDescription>
            </Col>
        </Row>
    </Grid>
  </StyledWorkProjectMainContainer>
);

export default TalentSpaceMainComponent;
