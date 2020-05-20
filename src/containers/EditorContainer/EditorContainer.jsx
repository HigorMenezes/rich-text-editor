import React from 'react';
import { Container } from './EditorContainer.styles';

import EditorActions from '../EditorActions';
import EditorContent from '../EditorContent';
import Divider from '../../components/Divider';

function EditorContainer() {
  return (
    <Container>
      <EditorActions />
      <Divider />
      <EditorContent />
    </Container>
  );
}

export default EditorContainer;
