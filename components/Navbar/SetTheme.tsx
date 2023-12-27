import { useTheme } from 'next-themes';
import { CgDarkMode } from 'react-icons/cg';
import '../../app/styles/fadeIn.css';

const SetTheme = () => {
    const { theme, setTheme } = useTheme()
    return (
        <li>
            <span className="cursor-pointer block text-sm p-3 dark:text-white transition delay-100 duration-200 ease-in zoom-effect hover:bg-fuchsia-600/50" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? (
                    <CgDarkMode className=" inline-block w-7 h-5 transition delay-100 duration-200 ease-in" />
                  ) : (
                    <CgDarkMode className=" inline-block w-7 h-5 transition delay-100 duration-200 ease-in" />
                  )}
            </span>
        </li>     
      )
}

export default SetTheme
