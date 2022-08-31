import React, { useEffect } from 'react';
import './App.css';
import { Convertor } from './components/Convertor/Convertor';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Convertor />
    </div>
  );
}

export default App;
