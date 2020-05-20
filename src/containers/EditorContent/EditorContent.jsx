import React, { useEffect } from 'react';

import { Container } from './EditorContent.styles';

function EditorContent() {
  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p');
  }, []);

  function handleKeyDown(e) {
    if (e.keyCode === 8 && !e.target.textContent) {
      e.preventDefault();
    }
  }

  return (
    <Container
      contentEditable
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning
    >
      <p>
        <br />
      </p>
    </Container>
  );
}

export default EditorContent;
