import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { BackContainer, Back } from './styles';

import AppContext from 'App/context';

export const BackButton: React.FC = () => {
  const { goBack } = useHistory();

  const { logged } = useContext(AppContext);

  return <BackContainer>{logged && <Back onClick={() => goBack()}>Voltar</Back>}</BackContainer>;
};
