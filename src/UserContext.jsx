import React from "react";
import { STATUS_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [apiKey, setApiKey] = React.useState("");
    const [data, setData] = React.useState(null); 
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogout = React.useCallback(async function() {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);

        localStorage.removeItem("apiKey");

        navigate("/login");
    }, [navigate]);

    async function getUser(key) {
        try {
            setError(null);
            setLoading(true);

            const {url, options} = STATUS_GET(key);

            const response = await fetch(url, options);
            const json = await response.json();
    
            if (!json.results) {
                throw new Error("Chave inválida");
            }

            setApiKey(key);
            setData(json.response.account);
            setLogin(true);
        } catch(e) {
            userLogout();
        } finally {
            setLoading(false);
        }
    }

    async function userLogin(key) {
        try {
            setError(null);
            setLoading(true);

            const {url, options} = STATUS_GET(key);

            const response = await fetch(url, options);
            const json = await response.json();

            if (json.results) {
                localStorage.setItem("apiKey", key);
                
                getUser(key);

                navigate("/");
            } else {
                throw new Error("Chave inválida");
            }
        } catch(e) {
            setError(e.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }
    
    React.useEffect(() => {
        async function autoLogin() {
            const key = window.localStorage.getItem("apiKey");

            if (key) {
                getUser(apiKey);
            } else {
                setApiKey("");
                userLogout();
            }
        }

        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ userLogin, userLogout, apiKey, data, error, loading, login }}>
            {children}
        </UserContext.Provider>
    );
}