import React,{ createContext }from 'react';
import './Cart.css';

import {products} from "./Product";

import ContextCart from './ContextCart';


export const CartContext = createContext();

const Cart = () => {

    return (
        
        <CartContext.Provider value={products}>
        <ContextCart />
        </CartContext.Provider>
       
    );
};

export default Cart
