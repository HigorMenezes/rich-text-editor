import React from 'react';
import Main from '../../layouts/Main';
import { Container } from './Editor.styles';
import EditorContainer from '../../containers/EditorContainer';

function Editor() {
  return (
    <Main>
      <Container>
        <EditorContainer />
      </Container>
    </Main>
  );
}

export default Editor;
