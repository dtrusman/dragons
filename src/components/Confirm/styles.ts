import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cecece;
  min-width: 50%;
  min-height: 50%;
  padding: 20px;
  background: linear-gradient(-45deg, #b22222, #f0e68c) fixed;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const Title = styled.span`
  font-size: 26px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 85px;

  @media (max-width: 600px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
