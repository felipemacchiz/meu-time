import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { STATUS_GET } from "../../api";

const LoginForm = () => {
    const apiKey = useForm();

    React.useEffect(() => {
        const storageApiKey = localStorage.getItem("apiKey");

        console.log(storageApiKey);

        if (storageApiKey) {
            getUser(storageApiKey);
        }
    }, []);

    async function getUser(key) {
        const {url, options} = STATUS_GET(key);
        
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json)
    } 

    async function handleSubmit(event) {
        event.preventDefault();

        if (apiKey.validate()) {
            const {url, options} = STATUS_GET(apiKey.value);

            const response = await fetch(url, options);
            const json = await response.json();

            console.log(json);

            if (json.results) {
                localStorage.setItem("apiKey", apiKey.value);
                getUser(apiKey);
            }
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