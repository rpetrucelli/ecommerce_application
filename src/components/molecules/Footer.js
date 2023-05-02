import { Link } from "react-router-dom";

import "../../styles/Footer.css"

function Footer() {
    return ( 
        <div className="footer">
            <header><b>Check out these useful links below</b></header>
            <ul className="footer-links">
                <Link to="/review"> Leave a review</Link>
                <li>Find a local restaurant</li>
                <li>Contact Us</li>
            </ul>
        </div>
     );
}

export default Footer;