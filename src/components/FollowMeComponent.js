// Component that will hold the reading list of the website
// Used in the About.js container 

// Packages
import React from "react";
import styled from "styled-components";

// Styled Components
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledLinkComponent from "../styledComponents/StyledLinkComponent";


const StyledAboutParagraphTitle = styled(StyledAboutParagraph)`
    font-size: 17px;
    font-style: bold;
    font-weight: 400;
`;

const LinkText = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3em;
`;

// const TitleText = styled(StyledAboutParagraph)`
//     font-size: 14px;
//     font-style: italic;
//     font-weight: 400;
//     line-height: 0.5em;
// `;

const CenterSkills = {
    textAlign: "left",
}

const BookMargin = {
    marginTop: "20px",
}


const FollowMeComponent = () => (
  <div style={CenterSkills} > 
        <StyledAboutParagraphTitle >  Follow Me </StyledAboutParagraphTitle>
        <LinkText>
        <StyledLinkComponent href="https://www.linkedin.com/in/abdelazizshokair/" target="blank"> LinkedIn</StyledLinkComponent> / <StyledLinkComponent href="https://github.com/abdelshok" target="blank">Github</StyledLinkComponent> / <StyledLinkComponent href="https://stackoverflow.com/users/7269511/abdel-aziz-shokair" target="blank"> Stack Overflow</StyledLinkComponent> / <StyledLinkComponent href="https://soundcloud.com/abdelshok" target="blank">Soundcloud</StyledLinkComponent>
        </LinkText>
  </div>
);

export default FollowMeComponent;
