// Component that will hold information for Politics Ajar Project
// Used in Work.js container

// Packages
import React from "react";
import styled from "styled-components";

// Styled Components
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledWorkProjectContainer from "../styledComponents/StyledWorkProjectContainer";
import StyledWorkProjectImage from "../styledComponents/StyledWorkProjectImage";
import StyledWorkProjectGithubLogo from "../styledComponents/StyledWorkProjectGithubLogo";

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

const CenterText = {
    textAlign: "center",
}

const DescriptionMargin = {
    marginTop: "30px",
}

const TalentSpaceImage = require("../assets/backgrounds/TalentSpace.png");
const GithubLogo =  require("../assets/icons/GithubLogo.png");

const TalentSpaceComponent = () => (
  <StyledWorkProjectContainer>
    <StyledWorkProjectImage src={TalentSpaceImage} />
    <TechnologyList> React / NodeJS / Express / AWS / Twilio API </TechnologyList>
    <ProjectDescription> Created the new React web app for TalentSpace, a European career accelerator pairing job seekers with top companies. 
        Implemented Login/Signup (using AWS Amplify), Talent Dashbard with slider menu, optimized for mobile and desktop usage, and AWS Lambda functions using the Serverless framework. 
    </ProjectDescription>
    <a href="https://www.talentspace.io/" >
        <StyledWorkProjectGithubLogo src={GithubLogo} />
    </a>
  </StyledWorkProjectContainer>
);

export default TalentSpaceComponent;
