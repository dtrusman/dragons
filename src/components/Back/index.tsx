import React from 'react';
import { useHistory } from 'react-router-dom';

import { BackContainer, Back } from './styles';

export const BackButton: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <BackContainer>
      <Back onClick={() => goBack()}>Voltar</Back>
    </BackContainer>
  );
};
