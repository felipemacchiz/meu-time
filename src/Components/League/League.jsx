import React from "react";
import Button from "../Forms/Button";
import { Link } from "react-router-dom";

const League = ({league, seasons}) => {
    return (
        <div>
            <h1>{league.name}</h1>
            <div>
                <p>Temporadas</p>
                <div>
                    {seasons.map((season) => (
                        <Link to="/season/?">
                            <Button>{season.year}</Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default League;