import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Skills from './components/Skills.js';
import Ultimate from './components/Ultimate.js';
import Author from './components/Author.js';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="image_1">
      <Main />
      </div>
      <Skills />
      <div className="image_2"></div>
      <Ultimate />
      <div className="image_3"></div>
      <Author />
    </div>
  );
}

export default App;
