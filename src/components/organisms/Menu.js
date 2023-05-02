import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";


import Card from "../molecules/Card";
import menu from "../../assets/menu";
import Footer from "../molecules/Footer";
import Location from "../molecules/Location";

import "../../styles/Menu.css"

function Menu() {
    const [input, setInput] = useState("");
    const [items, setItems]= useState(menu);
    const userContext = useContext(UserContext);

    const displayMenu = () =>{
        return (
            items.map( i => <Card item={i} key={i.id}/>)
        )
    }

    const onChange = (e) => {
        setInput(e.target.value);
        const newItems = menu.filter( i => {
            return i.name.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setItems(newItems);
        console.log(newItems);
    }

    return (
        <>
        <div className="body">
            <h3 className="heading">{userContext.user} Please Select a Sandwich Below</h3>
            {/* <Location /> */}
            <input 
                className="search-items"
                value={input}
                type="search"
                placeholder="Search for your favorite sandwich here"
                onChange={onChange}
            />

            <div className="items-container">
                { displayMenu() }
            </div>
        </div> 
        <Footer />
        </>
     );
}

export default Menu;