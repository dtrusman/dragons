import React from 'react';
import { useForm } from 'react-hook-form';

import { TextField, Button } from 'components';
import { Container, Form } from './styles';

import useModel from './useModel';

export const Login: React.FC = () => {
  const { authetication } = useModel();

  const { register, handleSubmit, reset } = useForm<Login>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = (form: Login) => authetication(form);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} id="login">
        <TextField name="email" label="Email" ref={register} />
        <TextField name="password" label="Senha" ref={register} />
      </Form>
      <Button className="orange" form="login">
        Logar
      </Button>
    </Container>
  );
};
