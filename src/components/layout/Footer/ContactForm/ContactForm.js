import React, { useState } from 'react';
import styled from 'styled-components';
import H3 from '../../../common/H3/H3';
import ButtonArrow from '../../../common/ButtonArrow/ButtonArrow';

const StlyedContactForm = styled.div`
   display: flex;
   flex-direction: column;
   input {
      border: none;
      width: 100%;
      border-bottom: 1px solid rgba(70, 70, 70, 0.15);
      background-color: transparent;
      font-size: 1.2rem;
      padding: 0.5rem 0.5rem;
      color: #7e7e7e;
      margin-bottom: 1.2rem;
   }
   .button_container {
      margin-top: 1rem;
      float: right;
   }
`;

const ContactForm = () => {
   const [email, setEmail] = useState('');
   const [question, setQuestion] = useState('');

   const handleChange = (e) => {
      switch (e.target.name) {
         case 'email':
            setEmail(e.target.value);
            break;
         case 'question':
            setQuestion(e.target.value);
            break;
         default:
            return;
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
         email,
         question,
      };
      fetch('/', {
         method: 'POST',
         body: JSON.stringify(data),
      }).catch((error) => {
         console.log(error); //todo fetch handling depending on response type
      });
   };

   return (
      <StlyedContactForm>
         <H3>Can we help you?</H3>
         <form onSubmit={(e) => handleSubmit(e)}>
            <input
               type="email"
               name="email"
               value={email}
               placeholder="your e-mail"
               onChange={(e) => handleChange(e)}
               required
            ></input>
            <input
               type="textarea"
               name="question"
               value={question}
               placeholder="your question"
               onChange={(e) => handleChange(e)}
               required
            ></input>
            <div className="button_container">
               <ButtonArrow>send</ButtonArrow>
            </div>
         </form>
      </StlyedContactForm>
   );
};

export default ContactForm;
