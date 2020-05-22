import React, { useState, useRef, useCallback } from 'react';
import { Container } from './EditorContainer.styles';

import EditorActions from '../EditorActions';
import EditorContent from '../EditorContent';
import Divider from '../../components/Divider';

function EditorContainer() {
  const [stateCommands, setStateCommands] = useState();
  const editorRef = useRef();

  const handleCheckCommand = useCallback(
    () =>
      setStateCommands({
        fontSize: Number(document.queryCommandValue('fontSize')),
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline'),
        subscript: document.queryCommandState('subscript'),
        superscript: document.queryCommandState('superscript'),
        justifyLeft: document.queryCommandState('justifyLeft'),
        justifyCenter: document.queryCommandState('justifyCenter'),
        justifyRight: document.queryCommandState('justifyRight'),
        justifyFull: document.queryCommandState('justifyFull'),
        insertOrderedList: document.queryCommandState('insertOrderedList'),
        insertUnorderedList: document.queryCommandState('insertUnorderedList'),
      }),
    [],
  );

  return (
    <Container>
      <EditorActions stateCommands={stateCommands} editorRef={editorRef} />
      <Divider />
      <EditorContent
        onCheckCommand={handleCheckCommand}
        editorRef={editorRef}
      />
    </Container>
  );
}

export default EditorContainer;
