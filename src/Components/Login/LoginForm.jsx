import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
    const apiKey = useForm();
    const { userLogin } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (apiKey.validate()) {
            userLogin(apiKey.value);
        }
    }
    
    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    name="apiKey" 
                    label="Digite a sua API key para usar as funcionalidades" 
                    placeholder="API key"
                    {...apiKey} 
                />
                <Button>Entrar</Button>
            </form>
        </section>
    );
}

export default LoginForm;