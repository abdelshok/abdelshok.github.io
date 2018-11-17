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

const ArtShopImage = require("../assets/backgrounds/ArtShop.png");
const TestImage = require("../assets/backgrounds/test.png");
const GithubLogo =  require("../assets/icons/GithubLogoWhite.png");

const ArtShopComponent = () => (
  <StyledWorkProjectContainer>
    <StyledWorkProjectImage src={TestImage} />
    <StyledWorkProjectTitle> The Art Shop </StyledWorkProjectTitle>
    <TechnologyList> React / NodeJS / Express / Sequelize </TechnologyList>
    <ProjectDescription> In a team of four, we created this e-commerce website selling Abstract art from the ground up. This Amazon-like project was a great way to be introduced to React, NodeJS, Express, and Sequelize. The webpage allows users to search through available artworks, filter through them, login/signup, add them to a cart, and checkout. </ProjectDescription>
    <a href="https://github.com/abdelshok/graceShopper" >
        <StyledWorkProjectGithubLogo src={GithubLogo} />
    </a>
  </StyledWorkProjectContainer>
);

export default ArtShopComponent;
