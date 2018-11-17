// General styling and sizing of the navigation bar at the top.
// Comment:
// - Unsure whether it is bettter that the Parent Navigation Bar
// sets the margin of its children, so that they are more indepedent
// and reusable, or the other way around.
import styled from "styled-components";

const StyledNavigationBarComponent = styled.div`
  background-color: transparent;
  height: 6em;
  width: 100%;
  position: relative;
`;

export default StyledNavigationBarComponent;
