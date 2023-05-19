import React from "react";
import { TbSoccerField } from "react-icons/tb";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/">
                    <TbSoccerField />
                    Meu time
                </Link>
                <Link className={styles.login} to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;