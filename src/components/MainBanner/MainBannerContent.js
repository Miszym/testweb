import React from 'react';
import styled from 'styled-components';
import ButtonText from '../common/ButtonText/ButtonText';

const StyledContent = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 15rem 5rem 0 5rem;
   z-index: 20;
   h1,
   h2 {
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 4rem;
   }
   h1 {
      font-size: 9rem;
      text-shadow: 3px 3px 3px #000000;
      font-family: 'Raleway', sans-serif;
      line-height: 8rem;
   }
   h2 {
      font-size: 2.8rem;
      text-shadow: 1px 1px 1px #000000;
      font-family: 'Roboto', sans-serif;
   }
   p {
      font-size: 2.8rem;
      color: white;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      margin-bottom: 4rem;
   }
   @media (max-width: 768px) {
      h1 {
         font-size: 6rem;
         line-height: 5.5rem;
      }
      h2,
      p {
         font-size: 1.9rem;
      }
   }
`;

const MainBannerContent = () => {
   return (
      <StyledContent>
         <h2>suspendisse - imperdiet felis</h2>
         <h1>
            duis eget
            <br />
            metus at tellus
         </h1>
         {/* this should be refactored to independent component */}
         <p className="carousel">
            Vivamus rhoncus mi auctor massa
            <br />
            commodo, accumsan neque egestas.
            <br />
            Integer sed ornare lectus.
         </p>
         <ButtonText
            style={{ size: '4.6rem', color: '#7423B8', width: '24.5rem' }}
         >
            start
         </ButtonText>
      </StyledContent>
   );
};

export default MainBannerContent;
