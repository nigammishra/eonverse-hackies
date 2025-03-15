import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './headandfoot/Header.jsx';
import React, { Suspense, lazy } from 'react';
import './App.css';

const Main = lazy(() => import('./component/MainPage.jsx'));
const Hero = lazy(() => import('./component/Hero.jsx'));
const About = lazy(() => import('./component/About.jsx'));
const Features = lazy(() => import('./component/Fetures/Features.jsx'));
const TechStack = lazy(() => import('./component/TechStack.jsx'));
const Demo = lazy(() => import('./component/Demo.jsx'));
const Contact = lazy(() => import('./component/Contact.jsx'));
const Signin = lazy(() => import('./component/loginitems/Signin.jsx'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/eonverse-hackies/" element={<Main />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/fetures" element={<Features />} />
            <Route path="/techStack" element={<TechStack />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
