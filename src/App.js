import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Card from './Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
  
function App() {
  return (
    <div className="App">
      <Navbar />
    <h1>CS 230L</h1>
    <h2>Section 03</h2>
    <p>WVU ID 800357587</p>
    <p> Hi! I am Chloe</p>
    <Card />
    </div>
  );
}

export default App;
