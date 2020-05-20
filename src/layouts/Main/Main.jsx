import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './Main.styles';

function Main({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
