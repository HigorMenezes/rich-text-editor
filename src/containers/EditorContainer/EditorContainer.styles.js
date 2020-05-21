import styled, { css } from 'styled-components';

const textEditorStyle = css`
  b {
    font-weight: bold;
  }

  i {
    font-style: italic;
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
