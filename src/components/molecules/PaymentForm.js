import { useContext, useState } from "react";
import { CartContext } from "../../App";

function PaymentForm() {
    const [cardInput, setCardInput] = useState("");
    const [address, setAddress] = useState("");

    const context = useContext(CartContext);

    const cardHandler = (e) => {
        setCardInput(e.target.value);
    }

    const addressHandler = (e) => {
        setAddress(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateCard() && validateAddress()) {
            alert("Order is Placed! Thank you for dining with subway");
            setCardInput("");
            setAddress("");
            context.setCartItems( {
                numItems: 0,
                items: [],
                total: 0
            });
        } else {
            alert("Card or Billing Address details invalid"); 
        }
    }

    const validateCard = () =>{
        return cardInput.length >= 12
    }

    const validateAddress = () => {
        return address.length >= 10
    }

    return ( 
        <form onSubmit={submitHandler} className="payment-form">
            <label htmlFor="card-number">Credit Card Number</label>
            <input className="input-box"
                id="card-number" 
                value={cardInput} 
                onChange={cardHandler}
                type="text"
            />
            
            <label htmlFor="address">Billing Address</label>
            <input className="input-box"
                id="address" 
                value={address} 
                onChange={addressHandler}
                type="text"
            />

            <button className= "submit-button" type="submit">Place Order</button>
        </form>
     );
}

export default PaymentForm;