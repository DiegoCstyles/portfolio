import Link from "next/link"
import '../../app/styles/fadeIn.css';

interface NavbarProps {
    page: string;
    currentLanguage: string;
}

const NavbarPage = ({ page, currentLanguage }: NavbarProps) => {
    const translations = {
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
            <Link className="block text-sm py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline hover:decoration-lime-600 dark:text-white dark:hover:decoration-blendedCyan hover:underline-offset-8 overline transition delay-100 duration-200 ease-in zoom-effect" 
                aria-current="page" 
                href={"/"+ page}>
                {translations[currentLanguage][page]}
            </Link>
        </li>
      )
}

export default NavbarPage
