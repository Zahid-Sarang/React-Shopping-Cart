import React,{createContext, useState}from 'react'
import './Cart.css';

import {products} from "./Product";

import ContextCart from './ContextCart';


export const CartContext = createContext();

function Cart() {

    const [item,setItem] = useState(products);

    return (
        <>
        <ContextCart>
        <ContextCart />
        </ContextCart>
        </>
    )
}

export default Cart
