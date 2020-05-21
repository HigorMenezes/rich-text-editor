import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Divider.styles';

function Divider({ vertical }) {
  return <Container vertical={vertical} />;
}

Divider.propTypes = {
  vertical: PropTypes.bool,
};

Divider.defaultProps = {
  vertical: false,
};

export default Divider;
