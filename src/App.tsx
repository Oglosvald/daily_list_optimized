import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulary from './components/Formulary';
import List from './components/List';
function App() {
  return (
      <div className="App">
        <Formulary/>
          <List/>
      </div>
  );
}

export default App;
