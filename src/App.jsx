import React from 'react';
import './App.css';
import ModeSwitcher from './ModeSwitcher';
import Bookshelf from './bookshelf';

const App = () => {
  return (
    <div>
      <ModeSwitcher />
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </div>
  );
};

export default App;



