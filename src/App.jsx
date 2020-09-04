import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { UserDetailsPage } from './pages/UserDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.USER_DETAILS} component={UserDetailsPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
