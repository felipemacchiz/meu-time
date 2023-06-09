import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styles from "./CountryItem.module.css";
import useFetch from "../../Hooks/useFetch";
import { LEAGUES_GET } from "../../api";
import { UserContext } from "../../UserContext";
import League from "../League/League";
import Loading from "../Helper/Loading";

const CountryItem = ({name, code}) => {
    const {apiKey} = React.useContext(UserContext);
    const [active, setActive] = React.useState(false);
    const {data, loading, error, request} = useFetch();

    async function fetchLeagues() {
        const { url, options } = LEAGUES_GET(apiKey, 0, code);
        const { response, json } = await request(url, options);
    }

    React.useEffect(() => {
        if (active) {
            fetchLeagues();
        }
    }, [request, active]);

    if (loading) {
        return <Loading/>;
    }

    return (
        <li>
            <div className={styles.countryHeader} onClick={() => setActive(!active)}>
                <p>{name}</p>
                {!active ? <BiChevronDown/> : <BiChevronUp/>}
            </div>
            {active && (
                <div className={styles.countryContent}>
                    {!loading && data && data.response && data.response.map(({country, league, seasons}, index) => <League key={`league${index}`} country={country} league={league} seasons={seasons} />)}
                </div>
            )}
        </li>
    )
}

export default CountryItem;