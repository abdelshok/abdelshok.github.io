// General styling and sizing of the navigation bar at the top.
// Comment:
// - Unsure whether it is bettter that the Parent Navigation Bar
// sets the margin of its children, so that they are more indepedent
// and reusable, or the other way around.
import styled from "styled-components";

const whiteBackground =  require("../assets/backgrounds/whiteBackground.png");
const blackBackground =  require("../assets/backgrounds/BlackBackground.jpg");

const StyledWhiteNavigationBarComponent = styled.div`
  background-image: url(${blackBackground});
  background-color: black;
  height: 6em;
  width: 100%;
  position: relative;
`;

export default StyledWhiteNavigationBarComponent;
