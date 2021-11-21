import React from 'react';
import "./Cart.css";

const EmptyCart = () => {
    return (
        <div>
         <>
            <header>
            <div className="continue-shopping">
                <img src="./Images/arrow.png" alt="arrow" className="arrow-icon"/>
                <h3>Continue shopping</h3>
            </div>
            <div className="cart-icon">
                <img src="./Images/cart.png" alt="cart" />
                <p>0</p>
            </div>
        </header>

        <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">you have <span className="total-items-count">0</span> items in shopping cart</p>
            </section>
        </>
            
        </div>
    )
}

export default EmptyCart
