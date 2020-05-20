import styled from 'styled-components';

export const Container = styled.button`
  margin: 1px;
  padding: 0px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  height: 25px;
  width: 25px;
  background-color: transparent;
  transition: background-color 0.1s ease;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
