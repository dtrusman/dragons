import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Dragon, Loader, Confirm } from 'components';

import { sort } from 'utils';
import useModel from './useModel';

import { Title, Container, Content, Create } from './styles';

export const List: React.FC = () => {
  const { dragons, loading, remove } = useModel();

  const [openConfim, setOpenConfirm] = useState<boolean>(false);
  const [id, setId] = useState<string>();

  const { push } = useHistory();

  return (
    <Container>
      {loading && <Loader />}

      {!loading && (
        <>
          <Create onClick={() => push('/dragons/create')}>+</Create>
          <Title>Dragões</Title>
          <Content>
            {sort(dragons).map((dragon: DragonItem) => (
              <Dragon
                key={dragon.id}
                dragon={dragon}
                onDetail={() => push(`/dragons/detail/${dragon.id}`)}
                onDelete={() => {
                  setOpenConfirm(true);
                  setId(dragon.id);
                }}
                onEdit={() => push(`/dragons/edit/${dragon.id}`)}
              />
            ))}
          </Content>

          {openConfim && (
            <Confirm
              onCancel={() => setOpenConfirm(false)}
              onConfirm={() => {
                remove(id!);
                setOpenConfirm(false);
              }}
            />
          )}
        </>
      )}
    </Container>
  );
};
