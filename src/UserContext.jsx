import React from "react";
import { STATUS_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
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

    async function getUser(apiKey) {
        try {
            setError(null);
            setLoading(true);

            const {url, options} = STATUS_GET(apiKey);

            const response = await fetch(url, options);
            const json = await response.json();
    
            if (!json.results) {
                throw new Error("Chave inválida");
            }

            setData(json.response.account);
            setLogin(true);
        } catch(e) {
            userLogout();
        } finally {
            setLoading(false);
        }
    }

    async function userLogin(apiKey) {
        try {
            setError(null);
            setLoading(true);

            const {url, options} = STATUS_GET(apiKey);

            const response = await fetch(url, options);
            const json = await response.json();

            if (json.results) {
                localStorage.setItem("apiKey", apiKey);
                getUser(apiKey);

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
            const apiKey = window.localStorage.getItem("apiKey");

            if (apiKey) {
                getUser(apiKey);
            } else {
                userLogout();
            }
        }

        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
            {children}
        </UserContext.Provider>
    );
}