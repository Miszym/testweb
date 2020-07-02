import React from 'react';
import styled from 'styled-components';
import Token from './Token';
import AnimatedTextTile from './AnimatedTextTile/AnimatedTextTile';
import VideoTile from './VideoTile';

const StyledContainer = styled.section`
   display: grid;
   grid-template-columns: 1fr 1fr;
   @media (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`;

const TilesContainer = () => {
   return (
      <StyledContainer>
         <AnimatedTextTile />
         <VideoTile />
      </StyledContainer>
   );
};

export default TilesContainer;
