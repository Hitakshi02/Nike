import React, {useState} from 'react'
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { cross } from "../assets/icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
          src={headerLogo} alt="Logo"
          width={129} height={29} className='m-0 w-[129px] h-[29px]'/>
        </a>
        <ul className='flex-1 flex gap-16 max-lg:hidden items-center justify-center'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={menuOpen ? 'hidden':'flex lg:hidden hover:cursor-pointer'} onClick={toggleMenu}>
          <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
        <div className={menuOpen ? 'flex lg:hidden hover:cursor-pointer ':'hidden'} onClick={toggleMenu}>
          <img src={cross} alt="cross" width={25} height={25}/>
        </div>
      </nav>
      <div className={menuOpen ? 'flex justify-end': 'hidden'}>
      <div className='flex bg-card bg-center bg-cover lg:hidden w-50 space-y-2 rounded-lg justify-end' >
          <ul>
            {navLinks.map((item) => (
              <li key={item.label} className='py-8 px-5'>
                <a href={item.href} className='font-montserrat text-lg text-black text-bold hover:underline hover:decoration-coral-red '>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
    </header>
  )
}

export default Nav

