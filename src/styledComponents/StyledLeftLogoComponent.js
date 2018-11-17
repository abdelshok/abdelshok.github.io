// Styling for the personal logo placed at the top left of the page 
// Disclaimer: For now, the logo will be two As, it will be replaced later by something else
// 
import styled from "styled-components";

// The p under here might be changed to an image later, for now we'll settle for a text. 

const StyledLeftLogoComponent = styled.p`
  font-size: 23px;
  font-weight: 700;
  font-style: normal;
  font-family: futura-pt;
  color: white; 
  letter-spacing: .5px;
  text-transform: uppercase;
  line-height: 1em;
  display: inline; 
  position: absolute;
  margin-left: 4%;
  margin-top: 45px;
  margin-bottom: 0px;
  margin-right: 0px;
`;

export default StyledLeftLogoComponent;

