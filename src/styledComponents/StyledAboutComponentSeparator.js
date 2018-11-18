// Div element that sets the spacing between the different elements of the 
// About page so that there is space (margin) between the elements 
// When the page is resized

import styled from "styled-components";

const StyledAboutComponentSeparator = styled.div`
  height: 100%;
  position: relative;
  @media (max-width: 990px) {
    margin-bottom: 40px;
    text-align: left; 
  }
`;

export default StyledAboutComponentSeparator;
