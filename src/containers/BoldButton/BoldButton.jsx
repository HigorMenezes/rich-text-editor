import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { BoldIcon } from './BoldButton.styles';

function BoldButton({ active }) {
  function handleBold() {
    document.execCommand('bold');
  }

  return (
    <ActionButton onClick={handleBold} active={active}>
      <BoldIcon />
    </ActionButton>
  );
}

BoldButton.propTypes = {
  active: PropTypes.bool,
};

BoldButton.defaultProps = {
  active: false,
};

export default BoldButton;
