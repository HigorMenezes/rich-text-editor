import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './EditorActions.styles';

import BoldButton from '../BoldButton';
import ItalicButton from '../ItalicButton';
import UnderlineButton from '../UnderlineButton';
import SubscriptButton from '../SubscriptButton';
import SuperscriptButton from '../SuperscriptButton';

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
      <UnderlineButton
        editorRef={editorRef}
        active={activeCommands.includes('underline')}
      />
      <SubscriptButton
        editorRef={editorRef}
        active={activeCommands.includes('subscript')}
      />
      <SuperscriptButton
        editorRef={editorRef}
        active={activeCommands.includes('superscript')}
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
