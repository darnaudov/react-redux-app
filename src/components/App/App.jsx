import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../../routes/Home';
import Login from '../../routes/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>

        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
