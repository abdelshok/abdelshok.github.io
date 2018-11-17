// Div Container that will hold the project image and description
// Interactive: borders will change colors when hovering above it

import styled from "styled-components";

const StyledWorkProjectContainer = styled.div`
  height: 550px;
  max-width: 600px;
  text-align: center;
  justify-content: center;
  background-color: black;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
  position: relative;
  &:hover {
  }
`;

export default StyledWorkProjectContainer;

// Box shadow can be added for an effect when hovering above the components
//     box-shadow:  0 0 0 1px #7742ef;

