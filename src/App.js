import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Menu from './pages/Menu/Menu';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router className="app-container">
      <Link to="/menu">
        <div className="menu common-flex">
          <div className="menu-line1"></div>
          <div className="menu-line2"></div>
          <div className="menu-line3"></div>
        </div>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
