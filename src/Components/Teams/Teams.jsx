import React from "react";
import Team from "./Team";


const Teams = (teams) => {
    return (
        <div>
            {teams.map((team, teamIndex) => <Team key={teamIndex} data={team} />)}
        </div>
    );
}

export default Teams;