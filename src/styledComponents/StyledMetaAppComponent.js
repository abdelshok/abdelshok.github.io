// Styled component that sets the foundational styles of the website, such as minimum width the window can be resized to,
// general background color, etc. 
// Used:
// - in App.js 

import styled from "styled-components";

const backgroundImage =  require("../assets/backgrounds/palms2.jpg");
const whiteBackground =  require("../assets/backgrounds/whiteBackground.png");
const image1 = require("../assets/backgrounds/1.jpg");
const image2 = require("../assets/backgrounds/2.jpg");
const image3 = require("../assets/backgrounds/3.jpg");
const image4 = require("../assets/backgrounds/4.jpg");
const image5 = require("../assets/backgrounds/5.jpg");
// const image6 = require("../assets/backgrounds/006.jpg");

const StyledMetaAppComponent = styled.div`
  background-image: url(${image1});
  min-width: 300px;
  height: auto;
  width: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
`;



export default StyledMetaAppComponent;

