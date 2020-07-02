import React from 'react';
import styled from 'styled-components';

const StyledToken = styled.div`
   height: 40rem;
   background: radial-gradient(
      circle,
      rgba(235, 226, 242, 1) 0%,
      rgba(113, 28, 178, 1) 100%
   );
`;

const Token = () => {
   return <StyledToken></StyledToken>;
};

export default Token;
