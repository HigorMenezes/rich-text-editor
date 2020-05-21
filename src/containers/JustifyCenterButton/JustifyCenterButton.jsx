import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { JustifyCenterIcon } from './JustifyCenterButton.styles';

function JustifyCenterButton({ active, editorRef }) {
  function handleJustifyCenter() {
    document.execCommand('justifyCenter');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleJustifyCenter} active={active}>
      <JustifyCenterIcon />
    </ActionButton>
  );
}

JustifyCenterButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

JustifyCenterButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(JustifyCenterButton);
