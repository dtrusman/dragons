import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-family: 'Shadows Into Light', cursive;
`;

export const Content = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  padding: 1rem;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Create = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #ecd886;
  color: #000;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px ##b73c2b;
  font-weight: bold;
  z-index: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
