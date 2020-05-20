import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './EditorActions.styles';

import BoldButton from '../BoldButton';
import ItalicButton from '../ItalicButton';

function EditorActions({ activeCommands }) {
  return (
    <Container>
      <BoldButton active={activeCommands.includes('bold')} />
      <ItalicButton active={activeCommands.includes('italic')} />
    </Container>
  );
}

EditorActions.propTypes = {
  activeCommands: PropTypes.arrayOf(PropTypes.string),
};

EditorActions.defaultProps = {
  activeCommands: [],
};

export default EditorActions;
