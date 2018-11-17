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

const DragonBallImage = require("../assets/backgrounds/DragonBall.png");
const TestImage = require("../assets/backgrounds/test1.png");
const GithubLogo =  require("../assets/icons/GithubLogoWhite.png");

const DragonBallComponent = () => (
  <StyledWorkProjectContainer>
    <StyledWorkProjectImage src={TestImage} />
    <StyledWorkProjectTitle> The Last Warrior </StyledWorkProjectTitle>
    <TechnologyList> React / NodeJS / Express / PhaserJS </TechnologyList>
    <ProjectDescription> The Last Warrior is an online fighting game that anybody can run in their browser. Players commands are sent to the server to process in the game engine. Designed with increasing difficulty: the velocity of bullets, the rate of monster appearance and type of monster change depending on the player damage and score. Honestly, I prefer Naruto. </ProjectDescription>
    <a href="https://github.com/abdelshok/The-Last-Warrior" >
        <StyledWorkProjectGithubLogo src={GithubLogo} />
    </a>
  </StyledWorkProjectContainer>
);

export default DragonBallComponent;
