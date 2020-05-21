import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { JustifyFullIcon } from './JustifyFullButton.styles';

function JustifyFullButton({ active, editorRef }) {
  function handleJustifyFull() {
    document.execCommand('justifyFull');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleJustifyFull} active={active}>
      <JustifyFullIcon />
    </ActionButton>
  );
}

JustifyFullButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

JustifyFullButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(JustifyFullButton);
