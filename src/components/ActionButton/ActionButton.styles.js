import styled, { css } from 'styled-components';

const activeStyle = css`
  color: #29b6f6;
  background-color: #e1f5fe;
`;

export const Container = styled.button`
  margin: 1px;
  padding: 0px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  height: 25px;
  width: 25px;
  color: #000000;
  background-color: transparent;
  transition: background-color 0.1s ease;

  ${(props) => props.active && activeStyle}

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
