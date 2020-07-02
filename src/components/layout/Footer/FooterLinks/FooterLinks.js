import React from 'react';
import styled from 'styled-components';
import H3 from '../../../common/H3/H3';

const StyledLinks = styled.div`
   width: 30rem;
   margin-bottom: 4rem;
   ul {
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 8rem;
      li {
         color: #7e7e7e;
         padding: 0.2rem 0;
         font-size: 1.2rem;
         font-weight: 300;
         &:hover {
            opacity: 0.8;
         }
      }
      a {
         text-decoration: none;
         color: inherit;
      }
   }
`;

const FooterLinks = () => {
   return (
      <StyledLinks>
         <H3>About lorem ipsum</H3>
         <ul>
            <li>
               <a href="/">Know more</a>
            </li>
            <li>
               <a href="/">Advantages</a>
            </li>
            <li>
               <a href="/">Tipes & tricks</a>
            </li>
            <li>
               <a href="/">Pricing</a>
            </li>
            <li>
               <a href="/">About us</a>
            </li>
            <li>
               <a href="/">FAQ</a>
            </li>
            <li>
               <a href="/">Terms and Conditions</a>
            </li>
         </ul>
      </StyledLinks>
   );
};

export default FooterLinks;
