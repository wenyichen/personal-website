
import React from 'react';
import './app.scss'
import { Header } from '../header/header';
import { Home } from '../home/home';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
