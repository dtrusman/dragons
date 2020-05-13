import React, { useContext } from 'react';

import { Container, LogoutButton } from './styles';
import { logout, isAuthenticated } from 'services/auth';

import AppContext from 'App/context';

export const Logout: React.FC = () => {
  const { logged, setLogged } = useContext(AppContext);

  const removeToken = async () => {
    logout();
    const auth = await isAuthenticated();
    if (!auth) {
      setLogged(false);
    }
  };

  return (
    <Container>
      {logged && <LogoutButton onClick={() => removeToken()}>Logout</LogoutButton>}
    </Container>
  );
};
