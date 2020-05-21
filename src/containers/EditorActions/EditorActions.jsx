import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './EditorActions.styles';

import BoldButton from '../BoldButton';
import ItalicButton from '../ItalicButton';

function EditorActions({ activeCommands, editorRef }) {
  return (
    <Container>
      <BoldButton
        editorRef={editorRef}
        active={activeCommands.includes('bold')}
      />
      <ItalicButton
        editorRef={editorRef}
        active={activeCommands.includes('italic')}
      />
    </Container>
  );
}

EditorActions.propTypes = {
  activeCommands: PropTypes.arrayOf(PropTypes.string),
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

EditorActions.defaultProps = {
  activeCommands: [],
  editorRef: null,
};

export default React.memo(
  EditorActions,
  (prevProps, nextProps) =>
    prevProps.activeCommands.toString() === nextProps.activeCommands.toString(),
);
