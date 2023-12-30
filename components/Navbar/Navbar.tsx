import { useState, useEffect } from 'react';
import { NavbarTitle } from '@/components'
import { NavbarPage } from '@/components'
import { SetTheme } from '@/components'
import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: () => void;
}

const Navbar = ({ currentLanguage, onLanguageChange }: NavbarProps) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // Set the breakpoint for small screens
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleMobileMenuToggle = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (!isSmallScreen) {
        // For desktop version
        if (currentScrollPos > prevScrollPos) {
          // Scrolling down, hide the navbar with transparency
          if (isNavbarVisible) {
            gsap.to('.nav', { opacity: 0, duration: 0.1, ease: 'power2.inOut' });
            setNavbarVisible(false);
          }
        } else {
          // Scrolling up, show the navbar with gradual opacity
          gsap.to('.nav', { opacity: 1, duration: 0.25, ease: 'power2.inOut' });
          setNavbarVisible(true);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.nav', {
      y: '0',
      scrollTrigger: {
        trigger: '.nav',
        start: 'top top',
        end: '+=200', // adjust the end value as needed
        toggleActions: 'play none none reverse',
      },
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarVisible, prevScrollPos, isSmallScreen]);

    return (
      <nav className={`nav ${isNavbarVisible ? 'fixed top-0 w-full' : 'fixed top-0 w-full'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0.5">
          <NavbarTitle />

          <div className="flex md:hidden">
            {/* Mobile menu */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 dark:bg-white"
              aria-controls="navbar-default"
              aria-expanded="false"
              aria-label="Navbar"
              onClick={handleMobileMenuToggle}
            >
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="#">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Pages */}
          <div 
            className={`w-full md:w-auto ${isSmallScreen && !isNavbarVisible ? 'hidden' : 'block'}`} 
            id="navbar-default"
          >
            {isSmallScreen ? (
              <div className={isNavbarVisible ? 'bg-black/95' : ''}>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:mt-0">
                  <li
                    className={`cursor-pointer block text-sm p-3 dark:text-white transition delay-100 duration-200 ease-in zoom-effect hover:bg-fuchsia-600`}
                    onClick={onLanguageChange}
                  >
                    {currentLanguage.toUpperCase()}
                  </li>
                  <NavbarPage page={"projects"} currentLanguage={currentLanguage}/>
                  <NavbarPage page={"about"} currentLanguage={currentLanguage}/> 
                  <SetTheme />
                </ul>
              </div>
            ) : (
              /* Desktop version */
              <div className="">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:mt-0">
                  <li
                    className={`cursor-pointer block text-sm p-3 dark:text-white transition delay-100 duration-200 ease-in zoom-effect hover:bg-fuchsia-600`}
                    onClick={onLanguageChange}
                  >
                    {currentLanguage.toUpperCase()}
                  </li>
                  <NavbarPage page={"projects"} currentLanguage={currentLanguage}/>
                  <NavbarPage page={"about"} currentLanguage={currentLanguage}/> 
                  <SetTheme />
                </ul>
              </div>
            )}
          </div>
         
        </div>
      </nav>
      )
}

export default memo(Navbar)
