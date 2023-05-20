import React from "react";
import { STATUS_GET } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null); 
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    async function getUser(apiKey) {
        const {url, options} = STATUS_GET(apiKey);

        const response = await fetch(url, options);
        const json = await response.json();


        setData(json.response.account);
        setLogin(true);
    }


    async function userLogin(apiKey) {
        const {url, options} = STATUS_GET(apiKey);

            const response = await fetch(url, options);
            const json = await response.json();

            if (json.results) {
                localStorage.setItem("apiKey", apiKey);
                getUser(apiKey);
            }
    }


    return (
        <UserContext.Provider value={{ userLogin, data }}>
            {children}
        </UserContext.Provider>
    );
}