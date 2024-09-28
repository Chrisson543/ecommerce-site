"use client";
import * as React from 'react';

import Link from 'next/link';
import Cart from './Cart';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
  return(
    <nav className='flex relative flex-col h-[77px] bg-[#181A20] shadow-md'>
      <div className='flex flex-row justify-between w-full p-5 border-b-slate-200 items-center'>
        <div className='flex flex-row space-x-5 items-center text-slate-300'>
          <Link href={'/'} className='font-bold text-[24px]'>CHRISSTORE</Link>
        </div>
        <div className='flex space-x-10 flex-row justify-between'>
          <div className='hidden flex-row laptop:flex'>
            <ul className='flex space-x-10 items-center'>
              <li className='hover:underline'>
                <Link href={'/'}>Home</Link> 
              </li>
              <li className='hover:underline'>
                <Link href={'/categories/tops'}>Tops</Link> 
              </li>
              <li className='hover:underline'>
                <Link href={'/categories/bottoms'}>Bottoms</Link> 
              </li>
              <li className='hover:underline'>
                <Link href={'/categories/accessories'}>Accessories</Link> 
              </li>
              <li className='hover:underline'>
                <Link href={'/#'}>Contact</Link> 
              </li>
            </ul>
          </div>
          
          <Cart />
          <NavbarDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;