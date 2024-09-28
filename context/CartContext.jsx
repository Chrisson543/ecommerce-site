"use client"

import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return{
        cart: [ ...state.cart, action.payload ]
      };
    case 'UPDATE_ITEM':
      return {
        cart: state.cart.map(
          item => item.id === action.payload.id ? {...item, quantity: item.quantity + action.payload.quantity} : item
        )
      }
    case 'REMOVE_ITEM':
      return{
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    default: return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state]);

  return(
    <CartContext.Provider value={{ ...state, dispatch }}>
      { children }
    </CartContext.Provider>
  )
};