// Components containing my description and introduction
// Used in the About container

// External Packages
import React, { Component } from 'react';
import styled from "styled-components";

// Styled Components
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";

// Constants
const StyledAboutParagraphTitle = styled(StyledAboutParagraph)`
    font-size: 28px;
    font-style: bold;
    font-weight: 600;
    font-color: rgb(223, 223, 223);
`;

const StyledAboutDescription = styled(StyledAboutParagraph)`
    font-size: 17px;
    font-style: bold;
    font-weight: 400;
    margin-top: 20px;
    color: rgb(215, 215, 215);
`;

const DescriptionStyling = {
    maxWidth: "300px",
    textAlign: "left"
}

const DescriptionComponent = () => (
    <div style={DescriptionStyling} >
        <StyledAboutParagraphTitle > 
            - I'm Abdel Aziz Shokair, a freelance Fullstack Software Engineer & Designer.
        </StyledAboutParagraphTitle>
        <StyledAboutDescription>
            I've always been drawn to the overlap between design and development. 
            <br/> 
            My skills are broad: from ux to design, front end to back end development.
            I enjoy each aspect, and love building sites & mobile apps from start to finish.
        </StyledAboutDescription>
        <StyledAboutDescription>
            Born & raised in Paris, France. Currently in Brooklyn, New York.
         </StyledAboutDescription>
    </div>
)

export default DescriptionComponent;