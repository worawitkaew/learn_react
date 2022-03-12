import { createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token,setToken] = useState(localStorage.setItem("awesomeLeadsToken"));

    useEffect(() => {
        const fetchUser = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
            };
            const response = await fetch("http://localhost:8000/api/users/me",requestOptions);

            if (!response.ok){
                setToken(null);
            }
            localStorage.setItem("awesomeLeadsToken",token)
        };
        fetchUser();
    }, [token]);
    return (
        <UserContext.Provider value={[token,setToken]}>
            {props.children}
        </UserContext.Provider>
    )
}