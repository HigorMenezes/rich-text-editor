import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './FontSizeSelect.styles';

const fonts = [1, 2, 3, 4, 5, 6, 7];

function FontSizeSelect({ fontSize, editorRef }) {
  function handleFontSize(e) {
    document.execCommand('fontSize', false, Number(e.target.value));
    editorRef.current.focus();
  }

  return (
    <Container>
      <select className="select" value={fontSize} onChange={handleFontSize}>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </Container>
  );
}

FontSizeSelect.propTypes = {
  fontSize: PropTypes.number,
  editorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

FontSizeSelect.defaultProps = {
  fontSize: 3,
  editorRef: null,
};

export default FontSizeSelect;
