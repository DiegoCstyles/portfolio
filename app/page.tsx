"use client";
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles/home.css';

gsap.registerPlugin(ScrollTrigger);

// Check if 'window' is defined before importing components that may use it
const isBrowser = typeof window !== 'undefined';
const Navbar = isBrowser ? require('@/components').Navbar : null;
const Hero = isBrowser ? require('@/components').Hero : null;
const AboutSection = isBrowser ? require('@/components').AboutSection : null;
const ProjectsSection = isBrowser ? require('@/components').ProjectsSection : null;
const Footer = isBrowser ? require('@/components').Footer : null;

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const cutCorner = {
    clipPath: 'polygon(0 2.00em, 2.00em 0, calc(100% - 2.00em) 0, 100% 2.00em, 100% calc(100% - 2.00em), calc(100% - 2.00em) 100%, 2.00em 100%, 0 calc(100% - 2.00em))',
  };
  
  const handleLanguageChange = () => {
    // Toggle between 'en' and 'pt-br'
    const newLanguage = currentLanguage === 'en' ? 'pt-br' : 'en';
    setCurrentLanguage(newLanguage);
  };

  const scrollTo = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
      <main className="light:ltBackground dark:dkBackground overflow-hidden">
        {/* Sections */}
        {Navbar && <Navbar currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange}/>}
        {Hero && <Hero currentLanguage={currentLanguage}/>}
        {ProjectsSection && (
          <section id="projects" style={cutCorner}>
            <ProjectsSection currentLanguage={currentLanguage} />
          </section>
        )}
        {AboutSection && (
          <section id="about" style={cutCorner}>
            <AboutSection currentLanguage={currentLanguage} />
          </section>
        )}
        {Footer && <Footer currentLanguage={currentLanguage}/>}
      </main>
  )
}
