import React from 'react';
import styled from 'styled-components';
import golden_gate from '../../video/golden_gate.mp4';

const StyledVideoTile = styled.article`
   div {
      video {
         position: relative;
         max-width: 100%;
         z-index: 10;
      }
   }
   h2 {
      font-size: 4rem;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 700;
      color: #002d5c;
      text-transform: uppercase;
      padding: 2rem;
   }
   @media (max-width: 1200px) {
      h2 {
         font-size: 2.5rem;
      }
   }
`;

const VideoTile = () => {
   return (
      <StyledVideoTile>
         <div>
            <video controls preload="metadata" src={golden_gate} />
         </div>

         <h2>
            lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit
         </h2>
      </StyledVideoTile>
   );
};

export default VideoTile;
