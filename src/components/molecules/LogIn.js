import { UserContext } from "../../App";
import { useContext, useState } from "react";

import users from "../../assets/users.js"

import "../../styles/Login.css"

function LogIn() {
    const userContext = useContext(UserContext);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const usernameHandler = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    };
    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        
        const currUser = getUser();

        if (!currUser) {
            alert("Username Incorrect");
            return;
        }
        
        if (currUser.password !== password){
            alert("Password Incorrect")
            return;
        }

        userContext.setUser(currUser.name);

        setUserName("");
        setPassword("");
    }

    const getUser = () => {
        for (let i = 0; i<users.length; i++){
            if (users[i].username === username){
                return users[i];
            }
        }
        return null;
    }

    return ( 
        <div className="login">
            <h2>Please Enter Your Username And Password Below</h2>
            <form className="login-form" onSubmit={submitHandler}>
                <fieldset >
                <label htmlFor="name">Username</label>
                <input 
                    id="name"
                    type="text"
                    value={username}
                    onChange={usernameHandler}
                />

                <label htmlFor="pword">Password</label>
                <input 
                    id="pword"
                    type="text"
                    value={password}
                    onChange={passwordHandler}
                />

                <button className="submit" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
     );
}

export default LogIn;