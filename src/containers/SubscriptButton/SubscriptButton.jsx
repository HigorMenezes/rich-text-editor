import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { SubscriptIcon } from './SubscriptButton.styles';

function SubscriptButton({ active, editorRef }) {
  function handleSubscript() {
    document.execCommand('subscript');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleSubscript} active={active}>
      <SubscriptIcon />
    </ActionButton>
  );
}

SubscriptButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

SubscriptButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(SubscriptButton);
