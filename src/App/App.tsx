import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { Logout, BackButton } from 'components';
import { Login, List, Detail, Create, Edit } from 'pages';

import { isAuthenticated } from 'services/auth';

import AppContext from './context';

import { Container, Header, Content } from './styles';

const App: React.FC = () => {
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    const auth = async () => {
      const auth = await isAuthenticated();
      if (auth) {
        setLogged(true);
      }
    };
    auth();
  }, []);

  return (
    <Suspense fallback={'Loading....'}>
      <Router>
        <Switch>
          <AppContext.Provider value={{ setLogged, logged }}>
            <Container>
              <Header>
                <BackButton />
                <Logout />
              </Header>
              <Content>
                {logged ? (
                  <>
                    <Route path="/dragons" exact={true} component={List} />
                    <Route path="/dragons/detail/:id" exact={true} component={Detail} />
                    <Route path="/dragons/create" exact={true} component={Create} />
                    <Route path="/dragons/edit/:id" exact={true} component={Edit} />
                    <Redirect to="/dragons" />
                  </>
                ) : (
                  <>
                    <Route path="/" exact={true} component={Login} />
                    <Redirect to="/" />
                  </>
                )}
              </Content>
            </Container>
          </AppContext.Provider>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
