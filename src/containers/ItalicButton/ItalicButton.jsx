import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { ItalicIcon } from './ItalicButton.styles';

function ItalicButton({ active }) {
  function handleItalic() {
    document.execCommand('italic');
  }

  return (
    <ActionButton onClick={handleItalic} active={active}>
      <ItalicIcon />
    </ActionButton>
  );
}

ItalicButton.propTypes = {
  active: PropTypes.bool,
};

ItalicButton.defaultProps = {
  active: false,
};

export default React.memo(ItalicButton);
