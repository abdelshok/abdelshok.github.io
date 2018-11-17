// Component that will hold all the different skills in the About page
// Used within a Col in the About.js container

// Packages
import React from "react";
import styled from "styled-components";

// Styled Components

import StyledHomeBackgroundComponent from "../styledComponents/StyledHomeBackgroundComponent";
import StyledAboutDivContainer from "../styledComponents/StyledAboutDivContainer";
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledAboutSkillContainer from "../styledComponents/StyledAboutSkillContainer";


const StyledAboutParagraphTitle = styled(StyledAboutParagraph)`
    font-size: 28px;
    font-style: bold;
    font-weight: 600;
    color: rgb(223, 223, 223);
`;

const SkillTitle = styled(StyledAboutParagraph)`
    font-size: 17px;
    font-style: bold;
    font-weight: 600;
    line-height: 0.5em;
    color: rgb(215, 215, 215);
`;

const SkillList = styled(StyledAboutParagraph)`
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1em;
    color: rgb(215, 215, 215);
`;

const CenterSkills = {
    textAlign: "left",
    maxWidth: "300px",
}

const SkillsComponent = () => (
  <div style={CenterSkills} > 
    <StyledAboutParagraphTitle >  What I Do </StyledAboutParagraphTitle>
    <StyledAboutSkillContainer>
        <SkillTitle> Front-end </SkillTitle>
        <SkillList> Javascript, ES6, React, Redux, D3.js, CSS3 </SkillList>
    </StyledAboutSkillContainer>
    <StyledAboutSkillContainer>
        <SkillTitle> Back-end </SkillTitle>
        <SkillList> NodeJS, Python, Java, Express, APIs, Sequelize, SQL</SkillList>
    </StyledAboutSkillContainer>
    <StyledAboutSkillContainer>
        <SkillTitle> Apps </SkillTitle>
        <SkillList> React Native, Electron </SkillList>
    </StyledAboutSkillContainer>
    <StyledAboutSkillContainer>
        <SkillTitle> Cloud </SkillTitle>
        <SkillList> AWS</SkillList>
    </StyledAboutSkillContainer>
    <StyledAboutSkillContainer>
        <SkillTitle> Languages </SkillTitle>
        <SkillList> Native: English, French, Arabic <br/> Conversational: Spanish </SkillList>
    </StyledAboutSkillContainer>

  </div>
);

export default SkillsComponent;
