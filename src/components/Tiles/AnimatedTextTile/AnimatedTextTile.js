import React, { useState } from 'react';
import styled from 'styled-components';
import * as tilesData from '../../../data/TextTile.json';
import Letters from './Letters';

const StyledAnimatedTextTile = styled.article`
   background-color: #d9dcec;
   padding: 8rem 2rem 2rem 2rem;
   display: flex;
   align-items: center;
   flex-direction: column;
   h3 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 4rem;
      font-size: 2.5rem;
      color: #d91223;
   }
   h4 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      margin-top: 0.7rem;
      font-size: 1.6rem;
      color: #d91223;
   }
   p {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      margin-top: 2rem;
      width: 30rem;
      font-size: 1.2rem;
      color: #4d6885;
      text-align: center;
   }
`;

const AnimatedTextTile = () => {
   const [activeText, setActiveText] = useState(tilesData.data[0]);

   const handleChange = async (index) => {
      if (!index) {
         return;
      }
      setActiveText(tilesData.data[parseInt(index)]);
   };

   return (
      <StyledAnimatedTextTile>
         <Letters changeActive={handleChange} />
         <h3>{activeText?.title}</h3>
         <h4>{activeText?.subtitle}</h4>
         <p>{activeText?.text}</p>
      </StyledAnimatedTextTile>
   );
};

export default AnimatedTextTile;
