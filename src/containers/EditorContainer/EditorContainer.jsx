import React, { useState, useCallback } from 'react';
import { Container } from './EditorContainer.styles';

import EditorActions from '../EditorActions';
import EditorContent from '../EditorContent';
import Divider from '../../components/Divider';

const listCommands = ['bold', 'italic'];

function EditorContainer() {
  const [activeCommands, setActiveCommands] = useState([]);

  const handleCheckCommand = useCallback(() => {
    const currentActiveCommands = listCommands.filter((command) =>
      document.queryCommandState(command),
    );
    setActiveCommands(currentActiveCommands);
  }, []);

  return (
    <Container>
      <EditorActions activeCommands={activeCommands} />
      <Divider />
      <EditorContent onCheckCommand={handleCheckCommand} />
    </Container>
  );
}

export default EditorContainer;
