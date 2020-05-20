import React from 'react';
import ActionButton from '../../components/ActionButton';
import { BoldIcon } from './BoldButton.styles';

function BoldButton() {
  function handleBold() {
    document.execCommand('bold');
  }

  return (
    <ActionButton onClick={handleBold}>
      <BoldIcon />
    </ActionButton>
  );
}

export default BoldButton;
