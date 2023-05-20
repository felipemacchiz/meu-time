import React from "react";
import styles from "./CountryItem.module.css";

const CountryItem = ({name, code, flag}) => {
    return (
        <li className={styles.countryItem}>
            <img src={flag} alt={name}/>
            <p>{name}</p>
        </li>
    )
}

export default CountryItem;