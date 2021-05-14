import React, { useState } from 'react'
import { Context } from './components/Context'
import { Route, Switch } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
