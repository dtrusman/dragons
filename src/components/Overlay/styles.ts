import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 1000 !important;
  background-color: #000000aa;
  transition: all 1s ease-in-out;
  animation: fadeIn 0.9s;

  &.-dismiss {
    animation: fadeOut 0.9s;
    opacity: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  transition: all 1s ease-in-out;
  animation: slideUp 0.6s;
  overflow: hidden;

  @media (max-width: $mobile) {
    align-items: flex-start;
  }

  @media (min-width: $mobile) {
    align-items: center;
  }

  & > div {
    box-shadow: 0px 0px 30px #00000077;
  }

  &.Dismiss {
    animation: slideDown 0.6s;
    transform: translateY(100vh);
  }
`;
