import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styles from "./CountryItem.module.css";
import useFetch from "../../Hooks/useFetch";
import { LEAGUES_GET } from "../../api";
import { UserContext } from "../../UserContext";
import League from "../League/League";

const CountryItem = ({name, code}) => {
    const {apiKey} = React.useContext(UserContext);
    const [active, setActive] = React.useState(false);
    const {data, loading, error, request} = useFetch();

    async function fetchLeagues() {
        const { url, options } = LEAGUES_GET(apiKey, code);
        const { response, json } = await request(url, options);
    }

    function handleClick() {
        setActive(!active);
    }

    React.useCallback(() => {
        if (active) {
            fetchLeagues();
        }
    }, [active]);

    return (
        <li>
            <div className={styles.countryHeader} onClick={handleClick}>
                <p>{name}</p>
                {!active ? <BiChevronDown/> : <BiChevronUp/>}
            </div>
            {active && (
                <div className={styles.countryContent}>
                    {!loading && data && data.response && data.response.map(({league, seasons}) => <League league={league} seasons={seasons} />)}
                </div>
            )}
        </li>
    )
}

export default CountryItem;