import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
   background-color: white;
   cursor: pointer;
   border: 0;
   border-radius: 2px;
   font-family: 'Roboto Condensed', sans-serif;
   text-transform: uppercase;
   width: ${(props) => props.style.width};
   color: ${(props) => props.style.color};
   font-size: ${(props) => props.style.size};
   &:hover {
      opacity: 0.8;
   }
`;

const ButtonText = ({ children, style }) => {
   return <StyledButton style={style}>{children || 'click'}</StyledButton>;
};

ButtonText.propTypes = {
   style: PropTypes.shape({
      color: PropTypes.string,
      width: PropTypes.string,
      size: PropTypes.string,
   }),
};

ButtonText.defaultProps = {
   style: {
      color: '#010101',
      width: '10rem',
      size: '1rem',
   },
};

export default ButtonText;
