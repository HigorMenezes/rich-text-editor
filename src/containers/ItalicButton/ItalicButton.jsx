import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { ItalicIcon } from './ItalicButton.styles';

function ItalicButton({ active, editorRef }) {
  function handleItalic() {
    document.execCommand('italic');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleItalic} active={active}>
      <ItalicIcon />
    </ActionButton>
  );
}

ItalicButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

ItalicButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(ItalicButton);
