import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { JustifyLeftIcon } from './JustifyLeftButton.styles';

function JustifyLeftButton({ active, editorRef }) {
  function handleJustifyLeft() {
    document.execCommand('justifyLeft');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleJustifyLeft} active={active}>
      <JustifyLeftIcon />
    </ActionButton>
  );
}

JustifyLeftButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

JustifyLeftButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(JustifyLeftButton);
