import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`;

export const Image = styled.img`
  margin-top: 10px;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const Name = styled.h1`
  font-family: 'Shadows Into Light', cursive;
`;

export const Description = styled.p`
  width: 60%;
  line-height: 25px;
  font-size: 18px;
  text-align: justify;

  @media (max-width: 600px) {
    width: 90%;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Created = styled.span`
  font-size: 12px;
  margin-bottom: 10px;
`;
