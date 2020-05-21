import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './EditorActions.styles';

import Divider from '../../components/Divider';

import BoldButton from '../BoldButton';
import ItalicButton from '../ItalicButton';
import UnderlineButton from '../UnderlineButton';
import SubscriptButton from '../SubscriptButton';
import SuperscriptButton from '../SuperscriptButton';
import JustifyLeftButton from '../JustifyLeftButton';
import JustifyCenterButton from '../JustifyCenterButton';
import JustifyRightButton from '../JustifyRightButton';
import JustifyFullButton from '../JustifyFullButton';
import OrderedListButton from '../OrderedListButton';
import UnorderedListButton from '../UnorderedListButton';

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
      <Divider vertical />
      <SubscriptButton
        editorRef={editorRef}
        active={activeCommands.includes('subscript')}
      />
      <SuperscriptButton
        editorRef={editorRef}
        active={activeCommands.includes('superscript')}
      />
      <Divider vertical />
      <JustifyLeftButton
        editorRef={editorRef}
        active={activeCommands.includes('justifyLeft')}
      />
      <JustifyCenterButton
        editorRef={editorRef}
        active={activeCommands.includes('justifyCenter')}
      />
      <JustifyRightButton
        editorRef={editorRef}
        active={activeCommands.includes('justifyRight')}
      />
      <JustifyFullButton
        editorRef={editorRef}
        active={activeCommands.includes('justifyFull')}
      />
      <Divider vertical />
      <OrderedListButton
        editorRef={editorRef}
        active={activeCommands.includes('insertOrderedList')}
      />
      <UnorderedListButton
        editorRef={editorRef}
        active={activeCommands.includes('insertUnorderedList')}
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
