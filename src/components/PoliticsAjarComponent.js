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
import StyledWorkProjectTitle from "../styledComponents/StyledWorkProjectTitle";

const ProjectDescription = styled(StyledAboutParagraph)`
    font-size: 15px;
    font-weight: 400;
    line-height: 1em;
    width: 250px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;    
`;

const TechnologyList = styled(StyledAboutParagraph)`
    font-size: 15px;
    font-weight: 600;
    font-style: bold;
    line-height: 1.1em;
    width: 250px;
    height: 30px;s
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const CenterText = {
    textAlign: "center",
}

const DescriptionMargin = {
    marginTop: "30px",
}

const PoliticsAjarImage = require("../assets/backgrounds/PoliticsAjar.png");
const GithubLogo =  require("../assets/icons/GithubLogoWhite.png");
const TestImage = require("../assets/backgrounds/test3.png");

// No styling for the "a" link element necessary because it is an inline element and doesn't need specific styling.
// Same applies to other link elements in the remaining four components:
// ArtShop, DragonBall, Fordham, and TalentSpace :) 
const PoliticsAjarComponent = () => (
  <StyledWorkProjectContainer>
    <StyledWorkProjectImage src={TestImage} />
    <StyledWorkProjectTitle> Politics Ajar </StyledWorkProjectTitle>
    <TechnologyList> React / NodeJS / Express / Sequelize / D3 </TechnologyList>
    <ProjectDescription> Proof of concept for a political application that allows users to determine their ideal candidates in the House of Representatives and Senate based on selected social issues. Currently uses a slice of recent votes from March 2017. Users select social issues such as the Environment, Immigration, and Taxes before receiving a personalized list of politicians that align with their views. </ProjectDescription>
    <a href="https://github.com/robschroeder333/Politics-AJAR" target="blank">
        <StyledWorkProjectGithubLogo src={GithubLogo} />
    </a>
  </StyledWorkProjectContainer>
);

export default PoliticsAjarComponent;
