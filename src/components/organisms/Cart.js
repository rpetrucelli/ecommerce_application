import { useContext } from 'react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

import Total from '../molecules/Total';
import Footer from "../molecules/Footer"

import '../../styles/Cart.css'

function Cart() {
    const context = useContext(CartContext);
    
    const formatted = context.cartItems.items.map( (item, index) => {
        
        const clickHandler = () => {
            const idx = context.cartItems.items.indexOf(item);
            const newItems = context.cartItems.items.slice(0, idx).concat(context.cartItems.items.slice(idx+1));
            context.setCartItems({
                numItems: context.cartItems.numItems - 1,
                items: newItems,
                total: context.cartItems.total - item.price
            })
        }
        return (
            <li className="cart-item" key={index}> 
                <h4>{item.name}</h4>  
                <span>${item.price}</span>
                <button className='remove' onClick={clickHandler}>remove</button>
            </li>);
        });

    const display = () => {
        if (context.cartItems.numItems == 0){
            return <li className=""><h4>Navigate to the menu to add items to your cart</h4></li>;
        } else {
            return formatted;
        }
    }
    
    return ( 
    <>
        <div className="cart-container">
            <h3>Your Items:</h3>
            <ul className='cart-list'>
                {display()}
            </ul>
            <div className="payment">
                <Total />
                <Link to="/checkout">
                    <button>
                        Check Out
                    </button>
                </Link> 
            </div>
        </div> 
        <Footer/>
        
    </>
    );
}

export default Cart;