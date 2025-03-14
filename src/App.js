import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './headandfoot/Header.jsx'
import Hero from './component/Hero.jsx'
import Main from './component/MainPage.jsx'
import About from './component/About.jsx'
import Fetures from './component/Fetures/Features.jsx'
import TechStack from './component/TechStack.jsx'
import Demo from './component/Demo.jsx'
import Contact from './component/Contact.jsx'
import React from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/fetures" element={<Fetures />} />
          <Route path="/techStack" element={<TechStack />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
