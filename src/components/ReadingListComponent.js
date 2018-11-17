// Component that will hold the reading list of the website
// Used in the About.js container 

// Packages
import React from "react";
import styled from "styled-components";

// Styled Components
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledAboutCenteringRightResize from "../styledComponents/StyledAboutCenteringRightResize";


const StyledAboutParagraphTitle = styled(StyledAboutParagraph)`
    font-size: 17px;
    font-style: bold;
    font-weight: 400;
`;

const AuthorText = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 400;
    line-height: 0.5em;
`;

// const TitleText = styled(StyledAboutParagraph)`
//     font-size: 14px;
//     font-style: italic;
//     font-weight: 400;
//     line-height: 0.5em;
// `;

const TitleText = styled(StyledAboutParagraph)`
    font-size: 14px;
    font-weight: 800;
    font-style: bold;
    line-height: 1em;
`;


const CenterSkills = {
    textAlign: "left",
}

const BookMargin = {
    marginTop: "20px",
}


const ReadingListComponent = () => (
  <div style={CenterSkills} > 
        <StyledAboutParagraphTitle >  Reading List </StyledAboutParagraphTitle>
        <div style={BookMargin} >
            <TitleText> Swipe to Unlock: A Primer on Technology and Business Strategy </TitleText>
            <AuthorText> by Parth Detroja </AuthorText>
        </div>

        <div style={BookMargin} >
            <TitleText> My Name is Red </TitleText>
            <AuthorText> by Orhan Pamuk </AuthorText>
        </div>

        <div style={BookMargin} >
            <TitleText> Man's Search for Meaning </TitleText>
            <AuthorText> by Viktor Frankl </AuthorText>
        </div>

        <div style={BookMargin} >
            <TitleText> Season of Migration to the North </TitleText>
            <AuthorText> by Tayeb Salih </AuthorText>
        </div>

        <div style={BookMargin} >
            <TitleText> The Idiot </TitleText>
            <AuthorText> by Fyodor Dostoevsky </AuthorText>
        </div>

  </div>
);

export default ReadingListComponent;


// <div style={BookMargin} >
// <TitleText> Meditations </TitleText>
// <AuthorText> by Marcus Aurelius </AuthorText>
// </div>

{/* <div style={BookMargin} >
<TitleText> You Get So Alone at Times </TitleText>
<AuthorText> by Charles Bukowski </AuthorText>
</div> */}