import Link from "next/link"
import '../../app/styles/fadeIn.css';
import { Link as ScrollLink, animateScroll } from "react-scroll";

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

     const scrollTo = (section: string) => {
        animateScroll.scrollToTop(); // Scroll to top to avoid conflicts with existing scroll position
        const targetElement = document.getElementById(section);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    
    return (
        <li>
            <Link href="#">
                {/* Wrap Link content in ScrollLink for smooth scrolling */}
                <ScrollLink
                  className="block text-sm p-3 dark:text-white transition delay-100 duration-200 ease-in zoom-effect hover:bg-fuchsia-600/50"
                  to={page.toLowerCase()} // Assumes that your sections have the same IDs as page names
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={20} // Adjust the offset as needed
                >
                  {(translations[currentLanguage] as any)[page].toUpperCase()}
                </ScrollLink>
              </Link>
        </li>
      )
}

export default NavbarPage
