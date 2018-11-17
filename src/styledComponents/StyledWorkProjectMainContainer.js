// Styled container that will hold the main projects featured on the Work page
// Styled so that it takes the whole width of the page
// Implemented so that it holds a carousel on the left and a description on the right
// Layout implemented with React-Bootstrap col, grid, and row components

import styled from "styled-components";

const StyledWorkProjectMainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  position: relative;
  &:hover {
  }
`;

export default StyledWorkProjectMainContainer;

// Effects that were used in hover, might add them later.
// border-style: solid;
// border-color: black;
// border-width: 1px;