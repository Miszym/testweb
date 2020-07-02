import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
   font-size: 1.8rem;
   font-family: 'Roboto Condensed', sans-serif;
   color: #002d5c;
   text-transform: uppercase;
   font-weight: normal;
   letter-spacing: 0.1rem;
   margin-bottom: 1rem;
`;

const H3 = ({ children }) => {
   return <StyledH3>{children}</StyledH3>;
};

export default H3;
