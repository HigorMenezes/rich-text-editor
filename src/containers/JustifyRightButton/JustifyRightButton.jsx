import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { JustifyRightIcon } from './JustifyRightButton.styles';

function JustifyRightButton({ active, editorRef }) {
  function handleJustifyRight() {
    document.execCommand('justifyRight');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleJustifyRight} active={active}>
      <JustifyRightIcon />
    </ActionButton>
  );
}

JustifyRightButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

JustifyRightButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(JustifyRightButton);
