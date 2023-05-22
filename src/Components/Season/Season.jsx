import React from "react";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { LEAGUES_GET, TEAMS_GET } from "../../api";
import { UserContext } from "../../UserContext";
import Loading from "../Helper/Loading";
import Teams from "../Teams/Teams";

const Season = () => {
    const {apiKey} = React.useContext(UserContext);

    const params = useParams();
    const {league: leagueId, season} = params;

    const league = useFetch();
    const teams = useFetch();

    async function fetchLeague() {
        const { url, options } = LEAGUES_GET(apiKey, leagueId);
        const leagueResponse = await league.request(url, options);
    }

    async function fetchTeams() {
        const { url, options } = TEAMS_GET(apiKey, leagueId, season);
        const teamsResponse = await teams.request(url, options);
    }

    React.useEffect(() => {
        fetchLeague();
        fetchTeams();
    }, [apiKey, league.request, teams.request]);

    return (
        <div className="container mainContainer">
            {(league.loading || teams.loading) ? (
                <Loading/>
            ) : (
                <div>
                    <div>
                        <p>{league?.response?.[0].country.name}</p>
                        <h1>{league?.response?.[0].league.name}</h1>
                        <p>{season}</p>
                    </div>
                    <Teams teams={teams?.response} />
                </div>
            )}
        </div>
    );
}

export default Season;