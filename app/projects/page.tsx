"use client"
import { useState, useEffect } from 'react';
import '../styles/fadeIn.css';
import './styles/home.css';

// Check if 'window' is defined before importing components that may use it
const isBrowser = typeof window !== 'undefined';
const Navbar = isBrowser ? require('@/components').Navbar : null;
const ProjectsSection = isBrowser ? require('@/components').ProjectsSection : null;
const Footer = isBrowser ? require('@/components').Footer : null;

export default function Projects() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = () => {
    // Toggle between 'en' and 'pt-br'
    const newLanguage = currentLanguage === 'en' ? 'pt-br' : 'en';
    setCurrentLanguage(newLanguage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    // Set up event listener when component mounts
    const mouseMoveListener = (e: MouseEvent) => {
        const event = e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>;
        handleMouseMove(event);
    };
    if (isBrowser) {
      window.addEventListener('mousemove', mouseMoveListener);

      // Clean up event listener when component unmounts
      return () => {
        window.removeEventListener('mousemove', mouseMoveListener);
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div style={{
      backgroundImage: 'linear-gradient(45deg, #000000, #000000, #9CBBE2)',
      backgroundSize: '200% 200%',
      animation: 'gradientAnimation 15s ease infinite',
      transform: 'translateY(var(--section-offset))'
    }}
      className="light:ltBackground dark:dkBackground overflow-hidden" onMouseMove={handleMouseMove}>     
      {/* Circular Cursor */}
      <div className="circular-cursor absolute w-12 h-12 rounded-full bg-white bg-opacity-70 pointer-events-none"
            style={{ left: cursorPosition.x-22, top: cursorPosition.y-22 }}>
      </div>
      {Navbar && <Navbar currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange}/>}
      {ProjectsSection && <ProjectsSection />}
      {Footer && <Footer />}
    </div>
  )
}
