// External Packages
import React, { Component } from 'react';
import styled from "styled-components";

// Containers
// Components

// Styled Components
import StyledHomeBackgroundComponent from "../styledComponents/StyledHomeBackgroundComponent";
import StyledAboutParagraph from "../styledComponents/StyledAboutParagraph";
import StyledContactContainer from "../styledComponents/StyledContactContainer";
import StyledFooterIconContainer from "../styledComponents/StyledFooterIconContainer";

// Constants
const StyledContactBackgroundComponent = styled(StyledHomeBackgroundComponent)`
  padding-top: 40px; 
  padding-bottom: 100px;
  width: 100%;
  height: 500px;
  background-color: rgb(24,24,24); 
  text-align: center;
`;
// Padding top: changes how far the Contact form is to the previous Work Container

// Constants
const ContactMeTitle  = styled(StyledAboutParagraph)`
    font-size: 28px;
    font-style: bold;
    font-weight: 600;
    color: rgb(223, 223, 223);
`;


const FooterText = styled(StyledAboutParagraph)`
    font-size: 15px;
    font-style: bold;
    font-weight: 600;
    line-height: 0.5em;
    color: rgb(215, 215, 215);
    margin-top: 50px;
    display: block;
`;

const ContactDescription = styled(StyledAboutParagraph)`
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1em;
    color: rgb(215, 215, 215);
`;

// const HeartIcon =  require("../assets/icons/Heart.png");
const LightningIcon =  require("../assets/icons/Lightning.png");

// Make size of all containers consistent because some are bigger
// Than others
class ContactMe extends Component {
    render() {
      return (
       <div>
       <StyledContactBackgroundComponent>
           <StyledContactContainer>
                <ContactMeTitle> Get in touch </ContactMeTitle>
                <ContactDescription> Please feel free to contact me if you have any enquiries. </ContactDescription>
                <ContactMeTitle> Email </ContactMeTitle>
                <ContactDescription> aas698@nyu.edu </ContactDescription>
                <ContactMeTitle> Phone </ContactMeTitle>
                <ContactDescription> +19174157475 </ContactDescription>
           </StyledContactContainer>
           <FooterText> Made with <StyledFooterIconContainer src={LightningIcon}/> in New York </FooterText>
       </StyledContactBackgroundComponent>
       </div>
      );
    }
  }
  
  export default ContactMe;
  

