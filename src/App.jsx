import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white flex flex-col antialiased selection:bg-azure-600 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
