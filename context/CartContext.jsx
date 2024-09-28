"use client";

import { createContext, useEffect, useReducer, useState } from "react";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return {
        cart: [...state.cart, action.payload],
      };
    case 'UPDATE_ITEM':
      return {
        cart: state.cart.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + action.payload.quantity } 
            : item
        ),
      };
    case 'REMOVE_ITEM':
      return {
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'SET_CART':
      return {
        cart: action.payload,
      };
    default: 
      return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('cart');
    if (storedData) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(storedData) });
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }, [state, isInitialized]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
