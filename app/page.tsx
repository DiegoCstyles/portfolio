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
const ContactSection = isBrowser ? require('@/components').ContactSection : null;
const Footer = isBrowser ? require('@/components').Footer : null;

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = () => {
    // Toggle between 'en' and 'pt-br'
    const newLanguage = currentLanguage === 'en' ? 'pt-br' : 'en';
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    // Create a GSAP timeline
    const timeline = gsap.timeline();

    // Hero section animation
    timeline.from(Hero, {
      opacity: 0,
      y: 50,
    });

    // Projects section animation
    timeline.from(ProjectsSection, {
      opacity: 0,
      y: 50,
    });

    // About section animation
    timeline.from(AboutSection, {
      opacity: 0,
      y: 50,
    });

    // Contact section animation
    timeline.from(ContactSection, {
      opacity: 0,
      y: 50,
    });

    gsap.utils.toArray(['#projects', '#about', '#contact']).forEach((section) => {
  if (section) {
    gsap.from(section as HTMLElement, {
      opacity: 0,        // Initial opacity (completely transparent)
      y: 50,             // Vertical translation
      scrollTrigger: {
        trigger: section as HTMLElement,
        start: 'top 90%',  // Trigger animation when 90% of the section is visible
        end: 'top 30%',   // Complete the animation when the top of the section is 30% visible
        scrub: true,
        onUpdate: (self) => {
          // Update the opacity as the scroll progresses
          let opacityValue;

          // If scroll is between 10% and 70%, fade in
          if (self.progress > 0.1 && self.progress < 0.7) {
            opacityValue = 0; // Scale progress for fade in
          } else if (self.progress >= 0.7) {
            opacityValue = self.progress + 0.2 ; // Scale progress for fade out
          } else {
            opacityValue = 1; // Before 10%, keep it fully transparent
          }

          gsap.set(section as HTMLElement, { opacity: opacityValue });
        },
      },
    });
  }
});

  }, []);

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
      </main>
  )
}
