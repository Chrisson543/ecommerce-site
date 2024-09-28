"use client";
import * as React from 'react';

import Link from 'next/link';
import { useState } from 'react';
import Cart from './Cart';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
  return(
    <nav className='flex relative flex-col h-[77px]'>
      <div className='flex flex-row justify-between w-full p-5 border-b-[1px] border-b-slate-200 items-center'>
        <div className='flex flex-row space-x-5 items-center text-slate-300'>
          <Link href={'/'} className='font-bold text-[24px]'>CHRISSTORE</Link>
          <p className='hidden sm:block'>Online Store</p>
        </div>
        <div className='flex space-x-10 flex-row justify-between'>
          <div className='hidden flex-row laptop:flex'>
            <ul className='flex space-x-10 items-center'>
              <li>
                <Link href={'/'}>Home</Link> 
              </li>
              <li>
                <Link href={'/categories/tops'}>Tops</Link> 
              </li>
              <li>
                <Link href={'/categories/bottoms'}>Bottoms</Link> 
              </li>
              <li>
                <Link href={'/categories/accessories'}>Accessories</Link> 
              </li>
              <li>
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