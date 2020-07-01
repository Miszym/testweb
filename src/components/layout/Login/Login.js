import React from 'react';
import styled from 'styled-components';
import ButtonText from '../../common/ButtonText/ButtonText';

const StyledLogin = styled.div`
   height: 100%;
   width: 42rem;
   background-color: #35124b;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   @media (max-width: 1200px) {
      width: 16rem;
      flex-direction: column;
   }
   @media (max-width: 768px) {
      width: 16rem;
      flex-direction: column;
   }
`;

const Login = () => {
   return (
      <StyledLogin>
         <ButtonText
            style={{ color: '#002D5C', width: '12rem', size: '2.4rem' }}
         >
            log in
         </ButtonText>
         <ButtonText
            style={{ color: '#7423B8', width: '12rem', size: '2.4rem' }}
         >
            register
         </ButtonText>
      </StyledLogin>
   );
};

export default Login;
