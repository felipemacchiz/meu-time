import React from "react";
import styles from "./Input.module.css"

const Input = ({ type, name, label, placeholder, value, error, onChange, onBlur }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input 
                id={name}
                name={name} 
                type={type} 
                placeholder={placeholder}
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