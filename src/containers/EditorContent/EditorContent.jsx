import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './EditorContent.styles';

function EditorContent({ onCheckCommand, editorRef }) {
  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p');
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, [editorRef]);

  function handleKeyDown(e) {
    if (e.keyCode === 8 && e.target.innerHTML === '<p><br></p>') {
      e.preventDefault();
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    document.execCommand('inserttext', false, e.clipboardData.getData('text'));
  }

  return (
    <Container
      contentEditable
      ref={editorRef}
      onKeyDown={handleKeyDown}
      onSelect={onCheckCommand}
      onFocus={onCheckCommand}
      onPaste={handlePaste}
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
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

EditorContent.defaultProps = {
  editorRef: null,
};

export default React.memo(EditorContent);
