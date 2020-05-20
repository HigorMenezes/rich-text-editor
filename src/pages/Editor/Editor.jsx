import React from 'react';
import Main from '../../layouts/Main';
import { EditorContainer, EditorActions } from './Editor.styles';
import Divider from '../../components/Divider';
import BoldButton from '../../containers/BoldButton';
import ItalicButton from '../../containers/ItalicButton';
import EditorContent from '../../containers/EditorContent';

function Editor() {
  return (
    <Main>
      <EditorContainer>
        <EditorActions>
          <BoldButton />
          <ItalicButton />
        </EditorActions>
        <Divider />
        <EditorContent />
      </EditorContainer>
    </Main>
  );
}

export default Editor;
