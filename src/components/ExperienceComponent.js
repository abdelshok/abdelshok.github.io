// Component that will hold all the different experience information in the About page
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

const DateText = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 400;
    line-height: 0.5em;
`;

const RoleText = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 1em;
`;

const CompanyName = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 800;
    font-style: bold;
    line-height: 0.5em;
`;

const LinkedinLink = styled(StyledAboutParagraph)`
    font-size: 16px;
    font-weight: 800;
    font-style: bold;
`;

const CenterSkills = {
    textAlign: "left",
}

const ExperienceMargin = {
    marginTop: "20px",
}

const LinkedInMargin = {
    marginTop: "50px",
}

const ExperienceComponent = () => (
  <div style={CenterSkills} > 
        <StyledAboutParagraphTitle >  Experience </StyledAboutParagraphTitle>
        <div style={ExperienceMargin} >
            <DateText> June - August 2018 </DateText>
            <CompanyName> Talent Space </CompanyName>
            <RoleText> Fullstack Software Engineer Intern </RoleText>
        </div>

        <div style={ExperienceMargin} >
            <DateText> April - July 2017 </DateText>
            <CompanyName> Teech </CompanyName>
            <RoleText> Product Manager </RoleText>
        </div>

        <div style={ExperienceMargin} >
            <DateText> January - April 2017 </DateText>
            <CompanyName> FullStack Academy </CompanyName>
            <RoleText> Software Engineering Student </RoleText>
        </div>


         {/* <div style={LinkedInMargin} >
            <LinkedinLink> LINKEDIN </LinkedinLink>
        </div> */}

  </div>
);

export default ExperienceComponent;

//  The LinkedIn link will either stay here or be moved on the other side of the Spotify playlist. 