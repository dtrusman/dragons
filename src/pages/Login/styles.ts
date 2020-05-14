import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
`;

export const Form = styled.form`
  width: 90%;

  @media (min-width: 600px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (min-width: 1440px) {
    width: 25%;
  }
`;
