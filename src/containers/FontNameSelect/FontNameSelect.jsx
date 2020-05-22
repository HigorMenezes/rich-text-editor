import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './FontNameSelect.styles';

const fonts = ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Ubuntu'];

function FontNameSelect({ fontName, editorRef }) {
  function handleFontName(e) {
    document.execCommand('fontName', false, e.target.value);
    editorRef.current.focus();
  }

  return (
    <Container>
      <select className="select" value={fontName} onChange={handleFontName}>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </Container>
  );
}

FontNameSelect.propTypes = {
  fontName: PropTypes.string,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

FontNameSelect.defaultProps = {
  fontName: 'Roboto',
  editorRef: null,
};

export default FontNameSelect;
