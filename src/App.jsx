import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
