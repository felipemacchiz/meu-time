import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginForm = () => {
    const [apiToken, setApiToken] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();

        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ apiToken })
        });
    }
    
    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="API key" type="text" name="apiKey" />
                <Button>Entrar</Button>
            </form>
        </section>
    );
}

export default LoginForm;