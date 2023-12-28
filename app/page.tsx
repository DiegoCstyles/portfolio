"use client";
import { useState, useEffect } from 'react';
import './styles/home.css';
import gsap from 'gsap';

// Check if 'window' is defined before importing components that may use it
const isBrowser = typeof window !== 'undefined';
const Navbar = isBrowser ? require('@/components').Navbar : null;
const Hero = isBrowser ? require('@/components').Hero : null;
const AboutSection = isBrowser ? require('@/components').AboutSection : null;
const ProjectsSection = isBrowser ? require('@/components').ProjectsSection : null;
const ContactSection = isBrowser ? require('@/components').ContactSection : null;
const Footer = isBrowser ? require('@/components').Footer : null;

export default function Home() {
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

  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const tl = gsap.timeline();

    // Example animation: move the cursor element
    tl.to(cursorRef.current, { duration: 0.5, x: cursorPosition.x, y: cursorPosition.y });

    return () => {
      // Cleanup if needed
      tl.kill();
    };
  }, [cursorPosition]);

  const scrollTo = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <main className="light:ltBackground dark:dkBackground overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Sections */}
        {Navbar && <Navbar currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange}/>}
        {Hero && <Hero currentLanguage={currentLanguage}/>}
        {ProjectsSection && (
          <section id="projects">
            <ProjectsSection currentLanguage={currentLanguage} />
          </section>
        )}
        {AboutSection && (
          <section id="about">
            <AboutSection currentLanguage={currentLanguage} />
          </section>
        )}
        {ContactSection && (
          <section id="contact">
            <ContactSection currentLanguage={currentLanguage} />
          </section>
        )}
        {Footer && <Footer currentLanguage={currentLanguage}/>}
        <div
        ref={cursorRef}
        className="cursor" // Add this class to your cursor element in your CSS
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          backgroundColor: 'red', // Customize the cursor appearance
          borderRadius: '50%',
        }}
      </main>
  )
}
