import React from 'react';
import styled from 'styled-components';
import bgImg from '../../img/background.jpeg';
import MainBannerContent from './MainBannerContent';

const StyledMainBanner = styled.section`
   width: 100%;
   height: 82.5rem;
   background: url(${bgImg});
   background-size: cover;
   background-position: bottom;
   .triangle_spectrum {
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 105rem 35vw 0 35vw;
      border-color: #ae299a transparent transparent transparent;
      opacity: 0.1;
      margin-left: 50%;
      transform: translateX(-50%);
      &.second {
         border-width: 105rem 20vw 0 20vw;
         border-color: #002d5c transparent transparent transparent;
      }
      &.third {
         border-width: 105rem 10vw 0 10vw;
         border-color: #002d5c transparent transparent transparent;
      }
      @media (max-width: 768px) {
         border-width: 90rem 45vw 0 45vw;
         &.second {
            border-width: 90rem 30vw 0 30vw;
         }
         &.third {
            border-width: 90rem 20vw 0 20vw;
         }
      }
   }
`;

const MainBanner = () => {
   return (
      <StyledMainBanner>
         <div className="triangle_spectrum"></div>
         <div className="triangle_spectrum second"></div>
         <div className="triangle_spectrum third"></div>
         <MainBannerContent />
      </StyledMainBanner>
   );
};

export default MainBanner;
