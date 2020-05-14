import React from 'react';
import { useForm } from 'react-hook-form';

import { Textarea, Button, TextField, Loader } from 'components';

import { Container, Form, Title, Span, FormGroup, ActionContainer } from './styles';

import useModel from './useModel';

export const Edit: React.FC = () => {
  const { saveForm, loading, dragon } = useModel();

  const { register, handleSubmit, reset } = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: FormFields) => {
    saveForm(data);
  };

  return (
    <Container>
      {!loading && (
        <>
          <Title>Atualização de Dragões</Title>
          <FormGroup>
            <Form onSubmit={handleSubmit(onSubmit)} id="form-add">
              <input type="hidden" name="id" ref={register} value={dragon?.id} />
              <TextField name="name" label="Nome" ref={register} value={dragon?.name} />
              <TextField name="type" label="Tipo" ref={register} value={dragon?.type} />
              <TextField
                name="imageUrl"
                label="Url Imagem"
                ref={register}
                value={dragon?.imageUrl}
              />
              <Textarea
                name="histories"
                label="Historias"
                ref={register}
                value={dragon?.histories}
              />
            </Form>
          </FormGroup>
          <ActionContainer>
            <Button type="submit" className="orange lg" form="form-add">
              <Span>Atualizar</Span>
            </Button>
          </ActionContainer>
        </>
      )}

      {loading && <Loader />}
    </Container>
  );
};
