import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Title from './components/Title/title';
import Maincard from './components/Maincard/maincard';
import MainText from './components/MainText/maintext';

function App() {
  return (
    <div className="App">
        <Header/>
        <Title/>
        <Maincard/>
        <MainText/>
    </div>
  );
}

export default App;
