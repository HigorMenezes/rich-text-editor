import styled, { css } from 'styled-components';

const textEditorStyle = css`
  p {
    line-height: 1.25;
    margin-bottom: 10px;
  }

  b {
    font-weight: bold;
  }

  i {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  sub {
    vertical-align: sub;
  }

  sup {
    vertical-align: super;
  }

  ol {
    list-style-type: decimal;
    margin-left: 30px;
  }

  ul {
    list-style-type: disc;
    margin-left: 30px;
  }
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  padding: 5px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: white;

  ${textEditorStyle}
`;
