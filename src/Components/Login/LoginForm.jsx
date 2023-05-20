import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
    const apiToken = useForm();

    function handleSubmit(event) {
        event.preventDefault();

        if (apiToken.validate()) {
            fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ apiToken })
            });
        }
    }
    
    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="API key" type="text" name="apiKey" {...apiToken} />
                <Button>Entrar</Button>
            </form>
        </section>
    );
}

export default LoginForm;