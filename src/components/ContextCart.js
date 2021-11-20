import React,{ useState}from 'react';
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {products} from "./Product";


const ContextCart = () => {
    const [item,setItem] = useState(products);
    return (
        <>
        <header>
            <div className="continue-shopping">
                <img src="./Images/arrow.png" alt="arrow" className="arrow-icon"/>
                <h3>Continue shopping</h3>
            </div>
            <div className="cart-icon">
                <img src="./Images/cart.png" alt="cart" />
                <p>7</p>
            </div>
        </header>

        <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">you have <span className="total-items-count">7</span> items in shopping cart</p>
            <div className="cart-items">
                   
                <div className="cart-items-container">
                <Scrollbars>
                {
                    item.map((curItem) => {
                        return <Items key={curItem.id} {...curItem}/>

                    })
                }
                </Scrollbars>
                </div>
            </div>
            <div className="card-total">
                <h3>Cart Total : <span>22000rs</span></h3>
                <button>checkout</button>
            </div>
        </section>
        </>
    )
}

export default ContextCart
