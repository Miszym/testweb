import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
   border: none;
   background-color: transparent;
   text-transform: uppercase;
   position: relative;
   color: #002d5c;
   margin: 1rem 0;
   line-height: ${(props) => (props.twoLines ? '1rem' : '2.8rem')};
   letter-spacing: 0.3rem;
   cursor: pointer;
   &:after {
      position: absolute;

      right: -0.2rem;
      width: 3rem;
      height: 3rem;
      border-bottom: 2px solid #002d5c;
      border-right: 2px solid #002d5c;
      content: '';
      transform: rotate(-45deg);
   }
   &:hover {
      opacity: 0.5;
   }
`;

const ButtonArrow = ({ children, twoLines }) => {
   return <StyledButton twoLines={twoLines}>{children}</StyledButton>;
};

ButtonArrow.propTypes = {
   twoLines: PropTypes.bool,
};

ButtonArrow.defaultProps = {
   twoLines: false,
};

export default ButtonArrow;
