import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './ActionButton.styles';

function ActionButton({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

ActionButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ActionButton;
