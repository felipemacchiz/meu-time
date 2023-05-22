import React from "react";
import { BiLoader } from 'react-icons/bi';
import styles from "./Loading.module.css";


const Loading = () => {
    return (
        <div className={styles.loading}><BiLoader/> Carregando...</div>
    )
}

export default Loading;