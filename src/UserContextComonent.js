import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState("Jesse Hall");
    const handleNameChange = (userName) => {
        setUser(userName);
    };
    return (
        <UserContext.Provider value={{ user, handleNameChange }}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };
