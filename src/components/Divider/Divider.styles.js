import styled, { css } from 'styled-components';

const vertical = css`
  width: 1px;
  height: 100%;
  margin: 0px 5px;
`;

const horizontal = css`
  width: 100%;
  height: 1px;
  margin: 5px 0px;
`;

export const Container = styled.div`
  ${(props) => (props.vertical ? vertical : horizontal)};
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
