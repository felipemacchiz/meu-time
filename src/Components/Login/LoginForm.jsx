import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const apiKey = useForm();
    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (apiKey.validate()) {
            userLogin(apiKey.value);
        }
    }
    
    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    name="apiKey" 
                    label="Digite a sua API key para usar as funcionalidades" 
                    placeholder="API key"
                    {...apiKey} 
                />
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )}
                <Error error={error}></Error>
            </form>
        </section>
    );
}

export default LoginForm;