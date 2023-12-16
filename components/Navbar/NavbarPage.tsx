import Link from "next/link"
import '../../app/styles/fadeIn.css';

interface NavbarProps {
    page: string;
    currentLanguage: string;
}

interface Translations {
  [language: string]: {
    about: string;
    projects: string;
    contact: string;
  };
}

const NavbarPage = ({ page, currentLanguage }: NavbarProps) => {
    const translations: Translations = {
    en: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    'pt-br': {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
  };
    
    return (
        <li>
            <Link className="block text-sm py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline hover:decoration-green-500 dark:hover:decoration-blendedCyan dark:text-white hover:decoration-green-500 dark:hover:decoration-blendedCyan hover:underline-offset-8 overline transition delay-100 duration-200 ease-in zoom-effect" 
                aria-current="page" 
                href={"/"+ page}>
                {(translations[currentLanguage] as any)[page].toUpperCase()}
            </Link>
        </li>
      )
}

export default NavbarPage
