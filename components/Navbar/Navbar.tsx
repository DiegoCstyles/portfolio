import { useState, useEffect } from 'react';
import { NavbarTitle } from '@/components'
import { NavbarPage } from '@/components'
import { SetTheme } from '@/components'
import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { gsap } from 'gsap';

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: () => void;
}

const Navbar = ({ currentLanguage, onLanguageChange }: NavbarProps) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // Set the breakpoint for small screens
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

   useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the navbar
        if (isNavbarVisible) {
          gsap.to('.nav', { top: '-10%', duration: 0.5, ease: 'power2.inOut' });
          setNavbarVisible(false);
        }
      } else {
        // Scrolling up, show the navbar
        if (!isNavbarVisible) {
          gsap.to('.nav', { top: '0', duration: 0.5, ease: 'power2.inOut' });
          setNavbarVisible(true);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarVisible, prevScrollPos]);

  
    return (
      <nav className={`nav ${isNavbarVisible ? 'fixed top-0 w-full' : 'relative'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0.5">
          <NavbarTitle />

          <div className="flex md:hidden">
            {isSmallScreen && (
              <ul className='mt-2 mr-2'>
                <SetTheme />
              </ul>
            )}

            {/* Mobile menu */}
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 dark:bg-white" aria-controls="navbar-default" aria-expanded="false" aria-label="Navbar">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="#"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Pages */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
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
         
        </div>
      </nav>
      )
}

export default memo(Navbar)
