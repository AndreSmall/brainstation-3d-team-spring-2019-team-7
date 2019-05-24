import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import MainVideo from './Components/MainVideo/MainVideo';
import Main from './Components/Main/Main';
import Query from './Components/Query/Query';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Query />
    </div>
  );
}

export default App;
