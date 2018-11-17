// Styled version of the Link component that is provider by React-Router-Dom
// Created here because the standard version of the link has CSS attributes
// That do not fit the design of the app. E.g. Underlined, etc.

import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLinkReactRouter = styled.Link`
    text-decoration: none;
`;

export default StyledLinkReactRouter;
