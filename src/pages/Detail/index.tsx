import React from 'react';
import useModel from './useModel';
import { Loader, BackButton } from 'components';

import { dateFormat } from 'utils';

import { Container, Image, Name, Description, Created } from './styles';

export const Detail: React.FC = () => {
  const { dragon, loading } = useModel();

  return (
    <Container>
      {loading && <Loader />}

      {!loading && (
        <>
          <Image src={dragon?.imageUrl} alt={dragon?.name} />
          <Name>{`${dragon?.name} - ${dragon?.type}`}</Name>
          <Description>{dragon?.histories}</Description>
          <Created>{`Criado em ${dragon?.createdAt && dateFormat(dragon?.createdAt)}`}</Created>
          <BackButton />
        </>
      )}
    </Container>
  );
};
