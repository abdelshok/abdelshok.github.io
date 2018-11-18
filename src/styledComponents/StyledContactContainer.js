// Div Container that will hold the project image and description
// Interactive: borders will change colors when hovering above it

import styled from "styled-components";

const StyledContactContainer = styled.div`
  height: 340px;
  width: 420px;
  text-align: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
  padding-top: 70px;
  position: relative;
  &:hover {
    box-shadow: 0 0 0 1px white;
    border-radius: 4px;
  }
`;

export default StyledContactContainer;