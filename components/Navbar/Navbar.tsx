import { NavbarTitle } from '@/components'
import { NavbarPage } from '@/components'
import { SetTheme } from '@/components'
import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // Set the breakpoint for small screens
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    // Set the current language when the user selects a different language
    setCurrentLanguage(language);

  };
  
    return (
      <nav >
        <div className="border bg-black/50 rounded-b-md border-black dark:border-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-3 md:p-4 lg:p-4">
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li
              className={`cursor-pointer text-sm ${
                currentLanguage === 'en' ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </li>
              <NavbarPage page={"about"}/>
              <NavbarPage page={"projects"}/>
              <NavbarPage page={"contact"}/>
              <SetTheme />
            </ul>
          </div>
         
        </div>
      </nav>
      )
}

export default memo(Navbar)
