// Div element that sets the spacing between the two rows in the About page
// Used in About container
// Reduces the margin between the two rows when the window is resize for a better layout

import styled from "styled-components";

const StyledAboutSecondRowStyling = styled.div`
  margin-top: 100px;
  @media (max-width: 990px) {
    margin-top: 10px;
  }
`;

export default StyledAboutSecondRowStyling;
