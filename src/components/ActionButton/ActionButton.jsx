import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './ActionButton.styles';

function ActionButton({ children, active, ...props }) {
  return (
    <Container active={active} {...props}>
      {children}
    </Container>
  );
}

ActionButton.propTypes = {
  children: PropTypes.element.isRequired,
  active: PropTypes.bool,
};

ActionButton.defaultProps = {
  active: false,
};

export default ActionButton;
