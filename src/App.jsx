import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/about'));
const Skills = lazy(() => import('./components/skills'));
const Projects = lazy(() => import('./components/projects'));
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/footer'));

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;