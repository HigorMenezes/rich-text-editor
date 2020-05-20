import React from 'react';
import ActionButton from '../../components/ActionButton';
import { ItalicIcon } from './ItalicButton.styles';

function Italic() {
  function handleItalic() {
    document.execCommand('italic');
  }

  return (
    <ActionButton onClick={handleItalic}>
      <ItalicIcon />
    </ActionButton>
  );
}

export default Italic;
