import React from 'react';
import { Container } from './EditorActions.styles';

import BoldButton from '../BoldButton';
import ItalicButton from '../ItalicButton';

function EditorActions() {
  return (
    <Container>
      <BoldButton />
      <ItalicButton />
    </Container>
  );
}

export default EditorActions;
