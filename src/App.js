import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './headandfoot/Header.jsx'
import Hero from './component/Hero.jsx'
import Main from './component/MainPage.jsx'
import './App.css';
import React from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Hero />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
