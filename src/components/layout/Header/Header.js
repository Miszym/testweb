import React from 'react';
import styled from 'styled-components';
import logo from './../../../img/logo.jpeg';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';

const StyledHeader = styled.header`
   position: fixed;
   width: 100%;
   height: 7.5rem;
   background-color: white;
   img {
      margin-left: 5rem;
      margin-top: 1rem;
      @media (max-width: 1200px) {
         margin-left: 0.5rem;
      }
   }
`;

const StyledMenuContainer = styled.div`
   float: right;
   height: 100%;
   display: flex;
`;

const Header = () => {
   return (
      <StyledHeader>
         <img src={logo} alt="logo" />
         <StyledMenuContainer>
            <Navbar />
            <Login />
         </StyledMenuContainer>
      </StyledHeader>
   );
};

export default Header;
