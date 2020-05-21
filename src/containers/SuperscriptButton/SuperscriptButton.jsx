import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { SuperscriptIcon } from './SuperscriptButton.styles';

function SuperscriptButton({ active, editorRef }) {
  function handleSuperscript() {
    document.execCommand('superscript');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleSuperscript} active={active}>
      <SuperscriptIcon />
    </ActionButton>
  );
}

SuperscriptButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

SuperscriptButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(SuperscriptButton);
