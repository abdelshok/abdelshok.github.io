import styled from "styled-components";

// The p under here might be changed to an image later, for now we'll settle for a text. 

const StyledRightLinkComponent = styled.a`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  color: white; 
  display: inline; 
  font-family: futura-pt, Roboto;
  margin-right: 20px;
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
  &:active {
    text-decoration: none;
    color: white;
  }
  &:visited {
    text-decoration: none;
    color: white;
  }
`;

export default StyledRightLinkComponent;
