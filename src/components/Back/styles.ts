import styled from 'styled-components';

export const BackContainer = styled.div`
  top: 0;
  left: 0;
  padding: 50px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 0;
    margin-bottom: 10px;
  }
`;

export const Back = styled.a`
  border: 1px solid #000;
  padding: 10px;
  background-color: #b63b28;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    width: 75%;
    background-color: #e9ce82;
    color: #000;
  }
`;
