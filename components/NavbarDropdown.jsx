'use client'

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function NavbarDropdown() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer(true)} className='flex hover:cursor-pointer flex-row items-center space-x-3'>
        <Image alt='hamburger-menu' className='laptop:hidden' src={'/images/hamburger-menu.svg'} width={20} height={20} />
      </button>
      <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
        <div className='flex flex-row laptop:hidden w-full border-t-[1px] border-t-slate-200 z-20 bg-white top-[77px]'>
          <ul className='flex flex-col items-center w-full'>
            <Link onClick={toggleDrawer(false)} className='p-5 border-b-[1px] border-b-slate-200 w-full hover:opacity-50 hover:cursor-pointer' href={'/'}><li>Home</li></Link>
            <Link onClick={toggleDrawer(false)} className='p-5 border-b-[1px] border-b-slate-200 w-full hover:opacity-50 hover:cursor-pointer' href={'/categories/tops'}><li>Tops</li></Link>
            <Link onClick={toggleDrawer(false)} className='p-5 border-b-[1px] border-b-slate-200 w-full hover:opacity-50 hover:cursor-pointer' href={'/categories/bottoms'}><li>Bottoms</li></Link>
            <Link onClick={toggleDrawer(false)} className='p-5 border-b-[1px] border-b-slate-200 w-full hover:opacity-50 hover:cursor-pointer' href={'/categories/accessories'}><li>Accessories</li></Link>
            <Link onClick={toggleDrawer(false)} className='p-5 border-b-[1px] border-b-slate-200 w-full hover:opacity-50 hover:cursor-pointer' href={'/#'}><li>Contact</li></Link>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
