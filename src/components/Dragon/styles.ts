import styled from 'styled-components';

export const Image = styled.img`
  width: 300px;
  height: 374px;
  display: block;
  object-fit: cover;
  transition: transform 3s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  z-index: -1;
`;

export const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0rem;
  padding: 1rem;
  color: #ffffff;
  transition: background-color 1.5s ease;
`;

export const Title = styled.h2`
  transition: color 1s ease;
  margin-bottom: 0.5rem;
  font-family: 'Shadows Into Light', cursive;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  max-height: 0;
  opacity: 0;
  transition: max-height 1.5s ease, opacity 1s ease;
`;

export const Card = styled.div`
  border: 0px solid aqua;
  margin: 0.5rem;
  position: relative;
  height: 374px;
  overflow: hidden;
  border-radius: 0.5rem;
  flex: 1;
  min-width: 290px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
    z-index: 0;
  }

  &:hover {
    cursor: pointer;
  }
  &:hover ${ActionsWrapper} {
    max-height: 20rem;
    opacity: 1;
  }
  &:hover ${TextWrapper} {
    background-color: rgba(0, 0, 0, 0.6);
  }
  &:hover ${Title} {
    color: red;
  }
  &:hover ${Image} {
    transform: scale(1.2);
    z-index: -1;
  }
`;

export const Icon = styled.i`
  &:hover {
    color: red;
  }

  &:hover:after {
    content: attr(data-tooltip);
    position: relative;
    padding: 5px;
    top: -6px;
  }
`;
