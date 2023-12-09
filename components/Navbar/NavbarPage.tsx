import Link from "next/link"
import '../../app/styles/fadeIn.css';

interface NavbarProps {
    page: string;
}

const NavbarPage = ({ page }: NavbarProps) => {
    return (
        <li>
            <Link className="block text-sm py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline hover:decoration-lime-600 dark:text-white dark:hover:decoration-blendedCyan hover:underline-offset-8 overline transition delay-100 duration-200 ease-in zoom-effect" aria-current="page" href={"/"+ page}>{page.toUpperCase()}</Link>
        </li>
      )
}

export default NavbarPage