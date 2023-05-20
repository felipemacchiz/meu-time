import React from "react";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import styles from "./Conta.module.css";

const Conta = () => {
    const {data, userLogout} = React.useContext(UserContext);

    return (
        <section className="container mainContainer animeLeft">
            <div className={styles.info}>
                <p className={styles.infoLabel}>Nome</p>
                <p className={styles.infoValue}>{data.firstname} {data.lastname}</p>
            </div>
            <div className={styles.info}>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>{data.email}</p>
            </div>
            <Button onClick={userLogout}>Log out</Button>
        </section>
    );
}

export default Conta;