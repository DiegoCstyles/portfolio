import { useTheme } from 'next-themes';
import { CgDarkMode } from 'react-icons/cg';
import '../../app/styles/fadeIn.css';

const SetTheme = () => {
    const { theme, setTheme } = useTheme()
    return (
        <li>
            <span className="dark:text-white cursor-pointer zoom-effect" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? (
                    <CgDarkMode className=" inline-block w-7 h-5 mr-1 hover:text-green-500 dark:hover:text-lime-600 transition delay-100 duration-200 ease-in" />
                  ) : (
                    <CgDarkMode className=" inline-block w-7 h-5 mr-1 hover:text-green-500 dark:hover:text-blendedCyan transition delay-100 duration-200 ease-in" />
                  )}
            </span>
        </li>     
      )
}

export default SetTheme
