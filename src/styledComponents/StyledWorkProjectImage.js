// Style for the image of the project
// Used in every single Work/Project Component, which will all be used in the Work.js container

import styled from "styled-components";

// Change the margin top? Does it have to be the same size as the sides?
const StyledWorkProjectImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 220px;
  display: block;
  margin-left: auto;
  margin-right: auto;  
  margin-top: 10%; 
  margin-bottom: 20px;
`;

export default StyledWorkProjectImage;
