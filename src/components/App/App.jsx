import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Login from 'routes/Login';
import * as routes from 'utils/routes';

import Header from '../Header';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>

        <Switch>
          <Route path={routes.home()} component={Home}/>
          <Route path={routes.login()} component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
