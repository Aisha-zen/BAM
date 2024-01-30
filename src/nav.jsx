import './App.css'
import go from '../public/go.svg'
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from 'react'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <>
      <header className='flex items-center justify-between  w-full flex-wrap sticky top-0 z-20 bg-white shadow-sm'>
        <div className="font-medium logo"><NavLink to="/" >
          mabdesign</NavLink>
        </div>
        <nav className='flex' >
          <div className='hidden md:flex gap-5 font-regular items-center'>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/Services" >Services </NavLink>
            <NavLink to="/Works" >Our works </NavLink>
            <NavLink to="/Contact" className='bg-[#94D82D] px-4 py-2 text-white flex items-center'> Contact <img src={go} /> </NavLink>
          </div>
          <div className='md:hidden'>
            <button onClick={toogleNavbar}> {isOpen ? <X /> : <Menu />} </button>
          </div>

        </nav>
        {isOpen && (
          <div className='flex basis-full flex-col  gap-5 font-regular items-center pb-5'>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/Services" onClick={closeMenu}>Services </NavLink>
            <NavLink to="/Works" onClick={closeMenu}>Our works </NavLink>
            <NavLink to="/Contact" onClick={closeMenu} className='bg-[#94D82D] px-4 py-2 text-white flex items-center'> Contact <img src={go} /> </NavLink>
          </div>

        )

        }

      </header>




    </>
  )
}

export default Nav
