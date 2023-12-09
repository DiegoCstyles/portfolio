import Link from 'next/link';
import '../../app/styles/fadeIn.css';

const NavbarTitle = () => {
    return (
        <Link href="/" className="flex items-center group">
                <span className="dark:text-white zoom-effect self-center top-0 left-0 text-2xl font-semibold whitespace-nowrap ">

                    <div className='flex'><span>Diego Costa</span> <span className='ml-1 text-blendedCyan'>/&gt;</span></div> 

                </span>
        </Link>
      )
}

export default NavbarTitle