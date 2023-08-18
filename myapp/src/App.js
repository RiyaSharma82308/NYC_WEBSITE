import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
