import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
   display: inline-block;
   height: 100%;
   margin-right: 3rem;
   @media (max-width: 1200px) {
      margin-right: 0.5rem;
   }
`;

const StyledUl = styled.ul`
   list-style: none;
   display: flex;
   height: 100%;

   a {
      text-decoration: none;
      color: inherit;
   }
   li {
      height: 100%;
      margin: 0 1rem;
      font-size: 1.6rem;
      line-height: 8rem;
      font-family: 'Roboto Condensed', sans-serif;
      color: #010101;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
   }
   li:hover {
      opacity: 0.5;
   }
   @media (max-width: 1200px) {
      li {
         margin: 0 0.6rem;
      }
   }
   @media (max-width: 768px) {
      position: absolute;
      left: 0;
      top: 7.5rem;
      width: 100vw;
      height: 100vh;
      background-color: #35124b;
      flex-direction: column;
      align-items: center;
      display: none;
      &.open {
         display: flex;
      }
      li {
         color: white;
      }
   }
`;

const StyledBurgerButton = styled.div`
   font-size: 4rem;
   position: absolute;
   left: 50%;
   top: 1rem;
   display: none;
   cursor: pointer;
   &:hover {
      opacity: 0.5;
   }
   @media (max-width: 768px) {
      display: block;
   }
`;

const Navbar = () => {
   const toggleMenu = () => {
      document.getElementById('menu').classList.toggle('open');
   };
   return (
      <StyledNavbar>
         <StyledBurgerButton onClick={toggleMenu}> &#9776; </StyledBurgerButton>
         <StyledUl id="menu">
            <a href="/">
               <li>Phasellus</li>
            </a>
            <a href="/">
               <li>Finibus</li>
            </a>
            <a href="/">
               <li>Congue & Rhoncus</li>
            </a>
            <a href="/">
               <li>Vivamus</li>
            </a>
         </StyledUl>
      </StyledNavbar>
   );
};

export default Navbar;
