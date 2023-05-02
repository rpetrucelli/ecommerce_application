import { useContext } from "react";
import { CartContext } from "../../App";

import menu from "../../assets/menu";

import "../../styles/Card.css"

function Card(props) { 
    const context = useContext(CartContext);
    const clickHandler = (e) => {
        context.setCartItems({
            numItems: context.cartItems.numItems + 1,
            items: [...context.cartItems.items, menu[props.item.id]],
            total: context.cartItems.total + props.item.price
          })
    }
    return ( 
        <div className="card">
            <h3 className="item-name">{props.item.name}</h3>
            <img className="img" src={process.env.PUBLIC_URL + props.item.img} alt=""/>
            <p className="price">${props.item.price}</p>
            <button className="add-item" onClick={clickHandler}>Add to Cart</button>
        </div>
     );
}

export default Card;