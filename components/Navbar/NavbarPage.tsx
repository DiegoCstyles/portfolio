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
            <Link className="block text-sm p-3 dark:text-white transition delay-100 duration-200 ease-in zoom-effect hover:bg-fuchsia-600/50" 
                aria-current="page" 
                href={"#"}>
                {(translations[currentLanguage] as any)[page].toUpperCase()}
            </Link>
        </li>
      )
}

export default NavbarPage
