import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 10px 25px;
  min-width: 160px;
  min-height: 48px;
  font-size: 18px;
  background-color: #35b8ab;
  color: #363636;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;

  transition: all 0.15s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #43e9d8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(28, 97, 90, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    background-color: #2e9d92;
    transform: translateY(1px);
    box-shadow: 0 6px 12px rgba(28, 97, 90, 0.1), 0 3px 7px -3px rgba(0, 0, 0, 0.3);
  }
`;
