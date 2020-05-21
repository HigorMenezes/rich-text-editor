import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../components/ActionButton';
import { UnorderedListIcon } from './UnorderedListButton.styles';

function UnorderedListButton({ active, editorRef }) {
  function handleUnorderedList() {
    document.execCommand('insertUnorderedList');
    editorRef.current.focus();
  }

  return (
    <ActionButton onClick={handleUnorderedList} active={active}>
      <UnorderedListIcon />
    </ActionButton>
  );
}

UnorderedListButton.propTypes = {
  active: PropTypes.bool,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

UnorderedListButton.defaultProps = {
  active: false,
  editorRef: null,
};

export default React.memo(UnorderedListButton);
