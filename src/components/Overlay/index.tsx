import React from 'react';
import cx from 'classnames';

import { Container, Content } from './styles';

interface Props {
  children: React.ReactNode;
  dismiss?: boolean;
}

export const Overlay = ({ children, dismiss }: Props) => {
  const dismissClassname = cx({
    '-dismiss': dismiss,
  });
  return (
    <Container className={dismissClassname}>
      <Content>{children}</Content>
    </Container>
  );
};
