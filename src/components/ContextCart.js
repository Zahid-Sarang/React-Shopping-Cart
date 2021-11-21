import React,{ useContext}from 'react';
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './Cart';
import EmptyCart from './EmptyCart';



const ContextCart = () => {
    const {item, clearCart, totalItem, totalAmount} = useContext(CartContext);

    if(item.length === 0){
        return (
            <EmptyCart />
        )
    }

    return (
        <>
        <header>
            <div className="continue-shopping">
                <img src="./Images/arrow.png" alt="arrow" className="arrow-icon"/>
                <h3>Continue shopping</h3>
            </div>
            <div className="cart-icon">
                <img src="./Images/cart.png" alt="cart" />
                <p>{totalItem}</p>
            </div>
        </header>

        <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">you have <span className="total-items-count">{totalItem}</span> items in shopping cart</p>
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
                <h3>Cart Total : <span>{totalAmount}$</span></h3>
                <button>checkout</button>
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
            </div>
        </section>
        </>
    )
}

export default ContextCart
