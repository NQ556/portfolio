import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/shared/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Process from './components/Process/Process';
import Contact from './components/Contact/Contact';
import Footer from './components/shared/Footer';

function App() {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Load fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
