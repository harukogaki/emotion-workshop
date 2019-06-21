/**
 * Steps:
 * 1. Move the TODOS h1 into it's own separate component and call the file Header.js
 * 2. In that file, create a styled component. For reference: https://emotion.sh/docs/styled
 * 3. Use the same css from App css to style the Header and then comment out the css from App.css
 * 3. Import Header component in App.js
 * 4. To Test your component styles, change some css property on it.
 * 
 */

import React from 'react'
import styled from '@emotion/styled'

// create style component here and replace the h1 with your styled component
const StyledHeader = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color:grey;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`;

function Header() {
    return ( <StyledHeader>Todos</StyledHeader>)
  }

export default Header
