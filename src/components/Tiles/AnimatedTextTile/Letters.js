import React from 'react';
import styled from 'styled-components';

const StyledLetters = styled.div`
   display: flex;
   justify-content: center;
   div {
      cursor: pointer;
      display: inline-block;
      position: relative;
      color: #002d5c;
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      font-size: 4rem;
      margin: 0 1.5rem;
      transform: translateY(0);
      transition: transform 0.5s ease-out;
      user-select: none;
      &:before {
         content: '';
         position: absolute;
         width: 100%;
         transform: scaleX(0);
         height: 3px;
         bottom: 0;
         left: 0;
         background-color: #002d5c;
         transform-origin: bottom center;
         transition: transform 0.5s ease-out;
      }
      &.active {
         color: #d91223;
         transform: translateY(-0.5rem);
         transition: transform 0.5s ease-out;
         &:before {
            transform: scaleX(1);
            transform-origin: bottom center;
         }
      }
      &:not(.active):hover {
         opacity: 0.8;
      }
   }
`;

const Letters = ({ changeActive }) => {
   const handleClick = (e) => {
      e.target.parentNode.childNodes.forEach((n) =>
         n.classList.remove('active')
      );
      e.target.classList.add('active');
      changeActive(e.target.dataset.id);
   };

   return (
      <StyledLetters onClick={(e) => handleClick(e)}>
         <div data-id={0} className="active">
            S
         </div>
         <div data-id={1}>T</div>
         <div data-id={2}>A</div>
         <div data-id={3}>R</div>
         <div data-id={4}>T</div>
      </StyledLetters>
   );
};

export default Letters;
