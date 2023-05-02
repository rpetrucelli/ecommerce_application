import { useContext } from "react";
import { CartContext } from "../../App";

import "../../styles/Total.css"

export default function Total(p) {
    const context = useContext(CartContext);
    return ( 
        <div className="total">
            <label>Your total is:</label>
            <p className="price">${context.cartItems.total}</p>
        </div> 
    );
}
