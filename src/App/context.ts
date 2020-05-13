import { createContext } from 'react';

interface AppContext {
  setLogged: (login: boolean) => void;
  logged: boolean;
}

export default createContext<AppContext>({
  setLogged: () => ({}),
  logged: false,
});
