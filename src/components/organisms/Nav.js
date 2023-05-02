import { Link, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { CartContext, UserContext } from "../../App";

import Cart from './Cart';
import Menu from "./Menu";
import Checkout from "./Checkout";
import Review from "../molecules/Review"
import LogIn from "../molecules/LogIn";

import "../../styles/Nav.css"
import Homepage from "./Homepage";

function Nav() {
    const cart = useContext(CartContext);
    const user = useContext(UserContext);


    return ( 
        <div className="page">
            <nav className="navbar">
                <Link to="/" className="nav-item">
                    <button className="menu-button">Home</button>    
                </Link> 

                <Link to="/menu" className="nav-item">
                    <button className="menu-button">Menu</button>    
                </Link> 

                { user.user !== "" ?
                    `Welcome ${user.user}`:
                    <Link to="/login">
                        <button className="login-btn">Log In</button>
                    </Link>
                }
                
                <Link to="/cart" className="cart">
                    <button className="cart-btn">Cart: {cart.cartItems.numItems}</button>
                </Link>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/review" element={<Review />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </div>
     );
}

export default Nav;