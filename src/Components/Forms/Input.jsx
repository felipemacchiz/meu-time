import React from "react";
import styles from "./Input.module.css"

const Input = ({ label, type, name, value, error, onChange, onBlur }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input 
                id={name}
                name={name} 
                type={type} 
                className={styles.input} 
                onChange={onChange} 
                onBlur={onBlur}
                value={value} 
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}

export default Input;