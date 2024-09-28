"use client"

import { CartContext } from "@/context/CartContext";
import { useContext, useState } from "react";

export default function ProductDescription({image, name, price, id}){
  const { dispatch, cart } = useContext(CartContext);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const addItem = (id, size, quantity) => {
    setShowErrorMessage(false);
    if(quantity == 0 || size == ''){
      setErrorMessage('Please choose a quantity and size.');
      setShowErrorMessage(true);
      
    }else{
      const itemExists = cart.find(item => item.id == id && item.size == size);
      if(cart.length != 0){
        if(itemExists){
          dispatch({ type: 'UPDATE_ITEM', payload: {id, quantity}})
        }else{
          dispatch({ type: 'ADD_ITEM', payload: {id, image, name, price, size, quantity}})
        }
      }else{
        dispatch({ type: 'ADD_ITEM', payload: {id, image, name, price, size, quantity}})
      }
    }

    
  };
  
  return(
    <div className="flex flex-col tablet:w-[60%] px-6 pt-8 pb-14 tablet:px-16 text-start">
      <p className=" text-3xl font-bold mt-5 mb-3">{name}</p>
      <p className="text-3xl mb-10">$ {price} USD</p>
      <p className=" text-sm mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nemo atque. Dicta, dolore assumenda voluptatum ipsum quis vero debitis velit! Praesentium, vero veniam? Debitis, ducimus optio? Possimus sequi natus suscipit.</p>
      <label className="text-sm font-bold mb-1" htmlFor="size">Size</label>
      <select onChange={(e) => {setSize(e.target.value)}} className=" mb-3 bg-[#f3f3f3] p-2 text-gray-400 border text-sm hover:cursor-pointer" name="size">
        <option value="">Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <label className="text-sm font-bold mb-1" htmlFor="quantity">Quantity</label>
      <input onChange={(e) => {setQuantity(parseInt(e.target.value))}} min={0} value={quantity} className=" py-2 w-fit pl-3 pr-2 mb-3 border text-black" type='number'/>
      {showErrorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      <button onClick={() => {addItem(id, size, quantity)}} className="bg-[#333] w-fit text-sm px-5 mt-7 py-3 text-white">Add to Cart</button>
    </div>
  );
}