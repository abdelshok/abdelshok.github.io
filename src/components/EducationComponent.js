// Component that will hold all the different education information in the About page
// Used within a Col in the About.js container

// Packages
import React from "react";
import styled from "styled-components";

// Styled Components
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";

const StyledAboutParagraphTitle = styled(StyledAboutParagraph)`
    font-size: 17px;
    font-style: bold;
    font-weight: 400;
`;

const DateAndDescription = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 400;
    line-height: 1em;
`;

const SchoolName = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 600;
    font-style: bold;
    line-height: 0.5em;
`;

const CenterSkills = {
    textAlign: "left",
}

const EducationMargin = {
    marginTop: "20px",
}

const SkillsComponent = () => (
  <div style={CenterSkills} > 
        <StyledAboutParagraphTitle >  Education </StyledAboutParagraphTitle>
        <div style={EducationMargin} >
            <DateAndDescription> 2017 - 2019 </DateAndDescription>
            <SchoolName> Fordham University </SchoolName>
            <DateAndDescription> Master of Science in Computer Science </DateAndDescription>
        </div>

        <div style={EducationMargin} >
            <DateAndDescription> 2012 - 2016 </DateAndDescription>
            <SchoolName> New York University </SchoolName>
            <DateAndDescription> Bachelor of Arts in Economics </DateAndDescription>
        </div>
  </div>
);

export default SkillsComponent;
