import { useRef } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar sections={{ aboutRef, skillsRef, projectsRef, contactRef }} />
      <section ref={aboutRef}><About /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={contactRef}><Contact /></section>

      <div className="h-24" /> {/* Spacer for footer */}
      <Footer />
    </div>
  
  );
}

export default App;
