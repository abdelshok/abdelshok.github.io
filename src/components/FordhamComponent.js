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
    line-height: 1em;
    width: 250px;
    height: 30px;
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

const FordhamImage = require("../assets/backgrounds/Fordham.png");
const TestImage = require("../assets/backgrounds/test2.png");
const GithubLogo =  require("../assets/icons/GithubLogoWhite.png");

// Put link for Qike project 

const FordhamComponent = () => (
  <StyledWorkProjectContainer>
    <StyledWorkProjectImage src={TestImage} />
    <StyledWorkProjectTitle> Fordham Forum </StyledWorkProjectTitle>
    <TechnologyList> React / NodeJS / Express / Sequelize  AWS </TechnologyList>
    <ProjectDescription> Currently leading a team of five in collaboration with Dr. Lyons, Director of CS at Fordham, to create a social platform where graduate and undergraduate Fordham students can share their own resources, such as course notes and solutions, share their experience at Fordham, and connect with the rest of the community for advice on topics such as job hunting and renting. </ProjectDescription>
    <a href="" target="blank"> 
        <StyledWorkProjectGithubLogo src={GithubLogo} />
    </a>
  </StyledWorkProjectContainer>
);

export default FordhamComponent;
