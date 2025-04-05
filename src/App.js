import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './headandfoot/Header.jsx';
import React, { Suspense, lazy } from 'react';
import './App.css';
import Chat from './component/ChatBox.js';
import PandaForm from './component/loginitems/PandaForm.jsx';
// import CapsuleScene from './component/CapsuleScene.js';

const Main = lazy(() => import('./component/MainPage.jsx'));
const Hero = lazy(() => import('./component/Hero.jsx'));
const About = lazy(() => import('./component/About.jsx'));
const Features = lazy(() => import('./component/Fetures/Features.jsx'));
const TechStack = lazy(() => import('./component/TechStack.jsx'));
const Demo = lazy(() => import('./component/Demo.jsx'));
const Contact = lazy(() => import('./component/contact/Contact.jsx'));
const Signin = lazy(() => import('./component/loginitems/Signin.jsx'));
// const Chat = lazy(() => import('./component/Chat.js'));

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
            <Route path="/chat" element={<Chat />} />
            <Route path="/pandaform" element={<PandaForm />} />
            {/* <Route path="/capsule" element={<CapsuleScene />} /> */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './headandfoot/Header.jsx';
// import React, { Suspense, lazy, useState, useEffect } from 'react';
// import './App.css';

// const Main = lazy(() => import('./component/MainPage.jsx'));
// const Hero = lazy(() => import('./component/Hero.jsx'));
// const About = lazy(() => import('./component/About.jsx'));
// const Features = lazy(() => import('./component/Fetures/Features.jsx'));
// const TechStack = lazy(() => import('./component/TechStack.jsx'));
// const Demo = lazy(() => import('./component/Demo.jsx'));
// const Contact = lazy(() => import('./component/Contact.jsx'));
// const Signin = lazy(() => import('./component/loginitems/Signin.jsx'));

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check if user is already logged in (from localStorage)
//   useEffect(() => {
//     const authStatus = localStorage.getItem('isAuthenticated');
//     if (authStatus === 'true') {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* Redirect to Signin if not authenticated */}
//             {!isAuthenticated ? (
//               <Route path="*" element={<Navigate to="/signin" />} />
//             ) : (
//               <>
//                 <Route path="/eonverse-hackies/" element={<Main />} />
//                 <Route path="/hero" element={<Hero />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/fetures" element={<Features />} />
//                 <Route path="/techStack" element={<TechStack />} />
//                 <Route path="/demo" element={<Demo />} />
//                 <Route path="/contact" element={<Contact />} />
//               </>
//             )}
//             <Route
//               path="/signin"
//               element={<Signin setIsAuthenticated={setIsAuthenticated} />}
//             />
//           </Routes>
//         </Suspense>
//       </div>
//     </Router>
//   );
// }

// export default App;

