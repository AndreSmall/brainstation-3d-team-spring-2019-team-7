import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainVideo from './Components/MainVideo/MainVideo';
import Main from './Components/Main/Main';
import Query from './Components/Query/Query';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/:id" render={(props => <Main {...props} />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
