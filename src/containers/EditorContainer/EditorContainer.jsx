import React, { useState, useRef, useCallback } from 'react';
import { Container } from './EditorContainer.styles';

import EditorActions from '../EditorActions';
import EditorContent from '../EditorContent';
import Divider from '../../components/Divider';

const listCommands = [
  'bold',
  'italic',
  'underline',
  'subscript',
  'superscript',
  'justifyLeft',
  'justifyCenter',
  'justifyRight',
  'justifyFull',
  'insertOrderedList',
  'insertUnorderedList',
];

function EditorContainer() {
  const [activeCommands, setActiveCommands] = useState([]);
  const editorRef = useRef();

  const handleCheckCommand = useCallback(() => {
    const currentActiveCommands = listCommands.filter((command) =>
      document.queryCommandState(command),
    );
    setActiveCommands(currentActiveCommands);
  }, []);

  return (
    <Container>
      <EditorActions activeCommands={activeCommands} editorRef={editorRef} />
      <Divider />
      <EditorContent
        onCheckCommand={handleCheckCommand}
        editorRef={editorRef}
      />
    </Container>
  );
}

export default EditorContainer;
