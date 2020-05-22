import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './EditorActions.styles';

import Divider from '../../components/Divider';

import FontNameSelect from '../FontNameSelect';
import FontSizeSelect from '../FontSizeSelect';
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

function EditorActions({ stateCommands, editorRef }) {
  return (
    <Container>
      <FontNameSelect editorRef={editorRef} fontName={stateCommands.fontName} />
      <Divider vertical />
      <FontSizeSelect editorRef={editorRef} fontSize={stateCommands.fontSize} />
      <Divider vertical />
      <BoldButton editorRef={editorRef} active={stateCommands.bold} />
      <ItalicButton editorRef={editorRef} active={stateCommands.italic} />
      <UnderlineButton editorRef={editorRef} active={stateCommands.underline} />
      <Divider vertical />
      <SubscriptButton editorRef={editorRef} active={stateCommands.subscript} />
      <SuperscriptButton
        editorRef={editorRef}
        active={stateCommands.superscript}
      />
      <Divider vertical />
      <JustifyLeftButton
        editorRef={editorRef}
        active={stateCommands.justifyLeft}
      />
      <JustifyCenterButton
        editorRef={editorRef}
        active={stateCommands.justifyCenter}
      />
      <JustifyRightButton
        editorRef={editorRef}
        active={stateCommands.justifyRight}
      />
      <JustifyFullButton
        editorRef={editorRef}
        active={stateCommands.justifyFull}
      />
      <Divider vertical />
      <OrderedListButton
        editorRef={editorRef}
        active={stateCommands.insertOrderedList}
      />
      <UnorderedListButton
        editorRef={editorRef}
        active={stateCommands.insertUnorderedList}
      />
    </Container>
  );
}

EditorActions.propTypes = {
  stateCommands: PropTypes.shape({
    fontName: PropTypes.string,
    fontSize: PropTypes.number,
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    underline: PropTypes.bool,
    subscript: PropTypes.bool,
    superscript: PropTypes.bool,
    justifyLeft: PropTypes.bool,
    justifyCenter: PropTypes.bool,
    justifyRight: PropTypes.bool,
    justifyFull: PropTypes.bool,
    insertOrderedList: PropTypes.bool,
    insertUnorderedList: PropTypes.bool,
  }),
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

EditorActions.defaultProps = {
  stateCommands: {
    fontName: 'Roboto',
    fontSize: 3,
    bold: false,
    italic: false,
    underline: false,
    subscript: false,
    superscript: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
    justifyFull: false,
    insertOrderedList: false,
    insertUnorderedList: false,
  },
  editorRef: null,
};

export default React.memo(
  EditorActions,
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.stateCommands) ===
    JSON.stringify(nextProps.stateCommands),
);
