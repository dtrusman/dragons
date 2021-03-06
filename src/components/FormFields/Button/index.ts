import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: block;
  margin-left: 10px;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  color: #ecf0f1;
  transition: background-color 0.3s;
  min-width: 182px;
  height: 56px;
  font-size: 16px;

  &:hover &:focus {
    background-color: #27ae60;
  }

  & > * {
    position: relative;
  }

  span {
    display: block;
    padding: 12px 24px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, 0.3);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }

  &.red {
    background-color: #e74c3c;
  }

  &.red:hover,
  &.red:focus {
    background-color: #c0392b;
  }

  &.orange {
    background-color: #e67e22;
  }

  &.orange:hover,
  &.orange:focus {
    background-color: #e0b375;
  }

  &.lg {
    min-width: 300px;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    min-width: 220px;
    height: 56px;
  }
`;
