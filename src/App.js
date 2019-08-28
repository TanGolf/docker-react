import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const handler = (event) =>
  {return setInput(event.target.value)}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange = {handler} value = {input} placeholder = "Try typing something Pig"/>
        <p>
          Hi there, {input}
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
    </div>
  );
}

export default App;
