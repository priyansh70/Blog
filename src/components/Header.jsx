import React from 'react'
import { images } from "../constants"
import navbar from "../constants/navbar";

const NavItem = ({nav}) => {
  return <li className='relative group'>
    <a href={nav.path} className='px-3 py-2'>{nav.title}</a>
    <span className='text-blue-700 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
  </li>
}

const Header = () => {
  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img src={images.Logo} alt="Logo" />
        </div>
        <div className='flex gap-x-9 items-center'>
          <ul className='flex gap-x-5 font-semibold'>
            {
              navbar.map((nav) => (
                <NavItem key={nav.id} nav={nav}/>
              ))
            }
          </ul>
          <button className='border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
        </div>
      </header>
    </section>
  )
}

export default Header