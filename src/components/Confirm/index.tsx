import React from 'react';
import { Overlay } from 'components';

import { Button } from 'components';

import { Container, Title, ButtonContainer } from './styles';

interface Props {
  onCancel: Function;
  onConfirm: Function;
}

export const Confirm = ({ onCancel, onConfirm }: Props) => {
  return (
    <Overlay>
      <Container>
        <Title>Confirma a deleção do item?</Title>
        <ButtonContainer>
          <Button className="orange" onClick={() => onCancel()}>
            Cancelar
          </Button>
          <Button className="red" onClick={() => onConfirm()}>
            Confirmar
          </Button>
        </ButtonContainer>
      </Container>
    </Overlay>
  );
};
