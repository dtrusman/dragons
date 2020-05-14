import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    order: 1;
  }
`;

export const Content = styled.div`
  @media (max-width: 600px) {
    order: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
