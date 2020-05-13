export const TOKEN_KEY = '@authentication-dragon';
const TOKEN_GENERATED =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiJ9.nRdmt0EoPHwZ201CxhiqWuU6XitTnltEoQM8TpEcPkM';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = () => {
  localStorage.setItem(TOKEN_KEY, TOKEN_GENERATED);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
