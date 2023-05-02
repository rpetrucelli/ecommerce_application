import { useContext } from "react";
import { UserContext } from "../../App";

import PaymentForm from "../molecules/PaymentForm";

import "../../styles/Checkout.css";

export default function Checkout() {
    const userContext = useContext(UserContext);
    return ( 
        <div className="checkout">
            <h3>Please Submit Your Payment Details To Place Your Order </h3>
            <PaymentForm />
        </div>
     );
}
