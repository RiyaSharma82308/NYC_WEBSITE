import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import ProjectForm from './components/ProjectForm';
import Careers3 from './components/Careers3';
import Careers6 from './components/Careers6';
import OperationalManagerForm from './components/OperationalManagerForm';
import Box from './components/Box';
import Box3 from './components/Box3';
import Box5 from './components/Box5';
import Box2 from './components/Box2';
import Box4 from './components/Box4';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Services from './components/services';
import { useEffect } from 'react';
import Industries from './components/industries';
import Subsidiaries from './components/Subsidiaries';
import Careers2 from './components/Careers2';
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contactform" element={<ContactForm/>}/>
      <Route exact path="/projectform" element={<ProjectForm/>}/>
      <Route exact path="/careers3" element={<Careers3/>}/>
      <Route exact path="/careers6" element={<Careers6/>}/>
      <Route exact path="/operational/manager/form" element={<OperationalManagerForm/>}/>
      <Route exact path="/Box" element={<Box/>}/>
      <Route exact path="/Box2" element={<Box2/>}/>
      <Route exact path="/Box3" element={<Box3/>}/>
      <Route exact path="/Box5" element={<Box5/>}/>
      <Route exact path="/Box4" element={<Box4/>}/>
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/Subsidiaries" element={<Subsidiaries />} />
      <Route path="/Careers2" element={<Careers2 />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
