import React from 'react';
import { useForm } from 'react-hook-form';

import { Textarea, Button, TextField, BackButton, Loader } from 'components';

import { Container, Form, Title, Span, FormGroup } from './styles';

import useModel from './useModel';

export const Create: React.FC = () => {
  const { saveForm, loading } = useModel();

  const { register, handleSubmit, reset } = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: FormFields) => {
    saveForm(data);
    reset({
      name: '',
      type: '',
      imageUrl: '',
      histories: '',
    });
  };

  return (
    <Container>
      {!loading && (
        <>
          <Title>Cadastro de Dragões</Title>
          <FormGroup>
            <Form onSubmit={handleSubmit(onSubmit)} id="form-add">
              <TextField name="name" label="Nome" ref={register} />
              <TextField name="type" label="Tipo" ref={register} />
              <TextField name="imageUrl" label="Url Imagem" ref={register} />
              <Textarea name="histories" label="Historias" ref={register} />
            </Form>
          </FormGroup>
          <Button type="submit" className="orange lg" form="form-add">
            <Span>Salvar</Span>
          </Button>
          <BackButton />
        </>
      )}

      {loading && <Loader />}
    </Container>
  );
};
