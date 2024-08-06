import { MdOutlineSearch } from 'react-icons/md';

import BoutonNavBar2 from './buttonslogin';
import BoutonNavBar from './buttonsresgister';
import Liens from './liens';
import Logo from './logo';

const Header =()=>{


    return(
        <header className="w-screen h-[12%] px-[15rem] flex flex-row  items-center gap-[10rem] justify-between ">
            <Logo/>
            <nav className='flex justify-center gap-[6rem] font-font_openSans'>
                <Liens url="" text="Home" />
                <Liens url="" text="About Us" />
                <Liens url="" text="Institutions" />
                <Liens url="" text="Library" />
                <Liens url="" text="Projects" />
                <Liens url="" text="Contact Us" />
            </nav>
            <div className='h-full flex items-center'>
                <div className='rounded-full w-[5rem] h-[5rem] flex justify-center items-center hover:bg-bgRose'>
                    <MdOutlineSearch size={24} className='text-buttonbgcolor w-[3rem] h-[3rem]'/>
                </div>
                <BoutonNavBar2 type="button" name="Login" text="Login"  />
                <BoutonNavBar type="button" name="Register" text="Register" />
            </div>
        </header>
    )
}

export default Header