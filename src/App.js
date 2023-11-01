import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Card from './Card';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
  
function App() {
  return (
    <div className="App">
      <Navbar />
    <Card />
    </div>
  );
}

export default App;
