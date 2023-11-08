import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import "bootstrap/dist/css/bootstrap.css";
import logo from './logo.svg';
import Navbar from './Navbar';
import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;