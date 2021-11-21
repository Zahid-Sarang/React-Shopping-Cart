import React,{ createContext,useReducer }from 'react';
import './Cart.css';

import {products} from "./Product";

import ContextCart from './ContextCart';

import { reducer } from './Reducer';


export const CartContext = createContext();

const initialState = {
    item : products,
    totalAmount: 0,
    totalItem:0,
};

const Cart = () => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const removeItem = (id) => {
        return dispatch({
            type:"REMOVE_ITEM",
            payload:id,
        });
    };

    return (
        
        <CartContext.Provider value={{...state,removeItem}}>
        <ContextCart />
        </CartContext.Provider>
       
    );
};

export default Cart
