'use client'

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import { CartContext } from '@/context/CartContext';
import { useContext, useState, useEffect } from 'react';

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: {id}})
  };
  const updateQuantity = (id, prevQuantity, currentQuantity) => {
    const difference =  currentQuantity - prevQuantity
    dispatch({ type: 'UPDATE_ITEM', payload: {id, quantity: difference}})
  };

  const {cart, dispatch} = useContext(CartContext);

  const cartItems = cart.map(item => {
    return(
      <div key={`${item.id} ${item.size}`} className='flex w-full border-b-grey border-[1px]'>
        <div className='w-[100px] h-full flex justify-center items-center border-r-grey border-[1px]'>
          <Image 
            src={item.image} 
            alt='item-image' 
            width={100} 
            height={150} 
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className='flex flex-col w-full p-6 border-r-[1px] border-r-grey'>
          <p className='font-bold'>{item.name}</p>
          <p>${item.price}</p>
          <p>Size: {item.size}</p>
          <button onClick={() => removeItem(item.id)} className='text-slate-400 w-min'>Remove</button>
        </div>
        <div className='w-24 flex items-center justify-center font-bold text-lg p-3'>
          <input className="text-center w-full" onChange={(e) => {updateQuantity(item.id, item.quantity, parseInt(e.target.value))}} value={item.quantity} min={0} type='number'/>
        </div>
      </div>
    );
  })

  useEffect(() => {
    const calculateSubtotal = () => {
      let num = 0;
      cart.forEach(item => {
        num += item.price * item.quantity;
      });
  
      setSubtotal(num);
    };
    calculateSubtotal(); 

  }, [cart])

  return (
    <div>
      <button onClick={toggleDrawer(true)} className='flex hover:cursor-pointer flex-row items-center space-x-3'>
        <Image src={'/images/cart.svg'} alt='cart-icon' width={20} height={20} />
        <p className=' bg-black text-[14px] text-white rounded-full px-1.5'>{cartItems.length}</p>
      </button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        <div className='flex flex-col h-full tablet:w-[500px] w-screen'>
          <div className='flex justify-between p-6 border-b-grey border-[1px]'>
            <h1 className='text-lg font-bold'>Your Cart</h1>
            <button onClick={toggleDrawer(false)}>X</button>
          </div>
          <div className='flex flex-col h-full'>
            {cartItems}
          </div>
          <div className='flex p-4 justify-between border-[1px] border-t-grey'>
            <p>Subtotal</p>
            <p className='font-bold'>${subtotal}</p>
          </div>
          <button className='bg-[#333] text-white py-4'>Continue to Checkout</button>
        </div>
      </Drawer>
    </div>
  );
}
