import React from 'react';
import styled from 'styled-components';
import FooterLinks from './FooterLinks/FooterLinks';
import ContactForm from './ContactForm/ContactForm';

const StyledFooter = styled.footer`
   width: 100%;
   background-color: #f5f4f5;
   padding: 2.5rem 4rem;
   display: flex;
   padding-bottom: 10rem;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const Footer = () => {
   return (
      <StyledFooter>
         <FooterLinks />
         <ContactForm />
      </StyledFooter>
   );
};

export default Footer;
