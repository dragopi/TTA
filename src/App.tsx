import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardItem } from './TTAUI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CardItem code="LEA01" />
      <CardItem code="LEA02" />
      <CardItem code="LEA03" />
      <CardItem code="LEA04" />
      <CardItem code="LEA05" />
      <CardItem code="LEA06" />
      <CardItem code="LEA07" />
      <CardItem code="LEA08" />
      <CardItem code="LEA09" />
      <CardItem code="LEA10" />
    </div>
  );
}

export default App;
