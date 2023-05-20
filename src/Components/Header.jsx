import React from "react";
import { TbSoccerField } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { BsBoxArrowInRight } from "react-icons/bs";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
    const { data } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/">
                    <TbSoccerField/>
                    Meu time
                </Link>
                { data ? (
                    <Link className={styles.login} to="/conta">{data.firstname} <BiUser/></Link>
                ) : (
                    <Link className={styles.login} to="/login">Login <BsBoxArrowInRight/></Link> 
                )}
            </nav>
        </header>
    );
}

export default Header;