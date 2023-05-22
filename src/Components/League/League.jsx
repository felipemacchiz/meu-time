import React from "react";
import Button from "../Forms/Button";
import { Link } from "react-router-dom";
import styles from "./League.module.css";

const League = ({league, seasons}) => {
    return (
        <div className={styles.league}>
            <h1>{league.name}</h1>
            <div>
                <p>Temporadas</p>
                <div className={styles.seasonsGrid}>
                    {seasons.map((season) => (
                        <Link key={`season${season.year}`} to="/season/?">
                            <Button>{season.year}</Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default League;