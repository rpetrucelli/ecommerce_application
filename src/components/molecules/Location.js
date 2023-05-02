import { useEffect, useState } from "react";

function Location() {
    const [location, setLocation] = useState();

    const fetchData = () => {
        fetch("http://api.ipstack.com/check?access_key=73e8a88f20942339036c636fc63623e8")
            .then((response) => response.json())
            .then((data) => setLocation(data))
            .catch((err) => console.log(err));
    };

    useEffect( () => {
        fetchData();
    }
    ,[])

    return ( 
        <div className="location">
            <h4>You are currently in {location && location.city}, {location && location.region_code}, {location && location.country_code}</h4>
        </div>
     );
}

export default Location;