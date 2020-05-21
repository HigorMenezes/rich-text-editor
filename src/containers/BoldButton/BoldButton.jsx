import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { BoldIcon } from './BoldButton.styles';

function BoldButton({ active, editorRef }) {
  function handleBold() {
    document.execCommand('bold');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleBold} active={active}>
      <BoldIcon />
    </ActionButton>
  );
}

BoldButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

BoldButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(BoldButton);
