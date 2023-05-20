import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { UserContext } from "../../UserContext";

const Login = () => {
    const { login } = React.useContext(UserContext);

    if (login) {
        return <Navigate to="/conta" />
    }

    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </div>
    );
}

export default Login;