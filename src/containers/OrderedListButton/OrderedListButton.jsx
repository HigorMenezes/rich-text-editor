import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { OrderedListIcon } from './OrderedListButton.styles';

function OrderedListButton({ active, editorRef }) {
  function handleOrderedList() {
    document.execCommand('insertOrderedList');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleOrderedList} active={active}>
      <OrderedListIcon />
    </ActionButton>
  );
}

OrderedListButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

OrderedListButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(OrderedListButton);
