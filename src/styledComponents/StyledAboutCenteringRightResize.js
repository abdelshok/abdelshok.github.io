// Div element used to center the element in the About page when the window is being resized
// Used directly in the components:
// - SkillsComponent, ReadingListComponent, DescriptionComponent, and Education Component
import styled from "styled-components";

const StyledAboutCenteringRightResize = styled.div`
  text-align: right;
  @media (max-width: 990px) {
    text-align: center;
  }
`;

export default StyledAboutCenteringRightResize;
