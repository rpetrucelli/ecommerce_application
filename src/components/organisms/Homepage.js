import Footer from "../molecules/Footer";
import Map from "../molecules/Map";
import "../../styles/Homepage.css"
import Promo from "../molecules/Promo";

function Homepage() {
    return ( 
        <>
        <div className='homepage'>
            <h3>Welcome to Subway!</h3>
        </div>
        <div className="home-content">
            <Promo />
            <Map />
        </div>
        <Footer/>
        </>
     );
}

export default Homepage;