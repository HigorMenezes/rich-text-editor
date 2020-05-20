import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './EditorContent.styles';

function EditorContent({ onCheckCommand }) {
  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p');
  }, []);

  function handleKeyDown(e) {
    if (e.keyCode === 8 && e.target.innerHTML === '<p><br></p>') {
      e.preventDefault();
    }
  }

  return (
    <Container
      contentEditable
      onKeyDown={handleKeyDown}
      onSelect={onCheckCommand}
      suppressContentEditableWarning
    >
      <p>
        <br />
      </p>
    </Container>
  );
}

EditorContent.propTypes = {
  onCheckCommand: PropTypes.func.isRequired,
};

export default EditorContent;
