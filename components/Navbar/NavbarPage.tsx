import Link from "next/link"
import '../../app/styles/fadeIn.css';
import { Link as ScrollLink, animateScroll } from "react-scroll";
import translations from './Translations';

interface NavbarProps {
    page: string;
    currentLanguage: string;
}

const NavbarPage = ({ page, currentLanguage }: NavbarProps) => {
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
                  className="block text-sm p-3 dark:text-white transition delay-100 duration-200 ease-in zoom-effect hover:bg-fuchsia-600"
                  to={page.toLowerCase()} // Assumes that your sections have the same IDs as page names
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={60} 
                >
                  {(translations[currentLanguage] as any)[page].toUpperCase()}
                </ScrollLink>
              </Link>
        </li>
      )
}

export default NavbarPage
