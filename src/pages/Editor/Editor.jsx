import React from 'react';
import Main from '../../layouts/Main';
import { EditorActions, EditorContent } from './Editor.styles';

function Editor() {
  function handleBold() {
    document.execCommand('bold');
  }

  return (
    <Main>
      <EditorActions>
        <button type="button" onClick={handleBold}>
          Bold
        </button>
      </EditorActions>
      <EditorContent contentEditable />
    </Main>
  );
}

export default Editor;
