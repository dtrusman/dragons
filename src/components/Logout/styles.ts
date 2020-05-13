import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 50px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`;

export const LogoutButton = styled.a`
  border: 1px solid #000;
  padding: 10px;
  background-color: #b63b28;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    width: 50%;
    background-color: #e9ce82;
    color: #000;
  }
`;
