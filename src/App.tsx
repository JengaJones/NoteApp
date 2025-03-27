import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoteManager from './Components/NoteManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <NoteManager/>
    </div>
  );
}

export default App;
