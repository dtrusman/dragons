import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { getToken, login, isAuthenticated } from 'services/auth';

import AppContext from 'App/context';

const EMAIL = 'teste@gmail.com';
const PASSWORD = '123456';

export default function () {
  const { push } = useHistory();
  const { setLogged } = useContext(AppContext);

  const [loading, setLoading] = useState<boolean>(false);

  const authetication = async (form: Login) => {
    setLoading(true);
    const token = getToken();
    if (!token && form.email === EMAIL && form.password === PASSWORD) {
      login();
      const auth = await isAuthenticated();
      if (auth) {
        setLogged(true);
      }
    }
    setLoading(false);
  };

  return { authetication, loading };
}
