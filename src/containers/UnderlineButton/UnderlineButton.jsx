import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { UnderlineIcon } from './UnderlineButton.styles';

function UnderlineButton({ active, editorRef }) {
  function handleUnderline() {
    document.execCommand('underline');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleUnderline} active={active}>
      <UnderlineIcon />
    </ActionButton>
  );
}

UnderlineButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

UnderlineButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(UnderlineButton);
