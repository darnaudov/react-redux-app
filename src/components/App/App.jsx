import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Login from 'routes/Login';
import * as routes from 'utils/routes';
import store from 'redux/store';
// import store from 'reduxDucks/store';

import Todo from '../Todo';
import Header from '../Header';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header/>

          <Switch>
            <Route path={routes.home()} component={Home}/>
            <Route path={routes.login()} component={Login}/>
          </Switch>

          <Todo/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
