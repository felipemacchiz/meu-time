import React from "react";
import CountryItem from "./CountryItem";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./Countries.module.css";
import { COUNTRIES_GET } from "../../api";
import { UserContext } from "../../UserContext";

const Countries = () => {
    const {apiKey} = React.useContext(UserContext);
    const {data, loading, error, request} = useFetch();
    const [search, setSearch] = React.useState("");

    function searchContries() {
        fetchCountries();
    }

    async function fetchCountries() {
        const { url, options } = COUNTRIES_GET(apiKey, {search});
        const { response, json } = await request(url, options);
    }

    React.useEffect(() => {
        

        fetchCountries();
    }, [request]);

    if (error) {
        return <Error/>
    }

    return (
        <div>

            <div>
                <Input 
                    name="searchCountry" 
                    label="Busque um país" 
                    placeholder="Digite um país"
                    value={search}
                    onChange={({target}) => setSearch(target.value)}
                    onBlur={searchContries}
                />
            </div>
            {data ? (
                <ul className={styles.countriesGrid}>
                    {data?.response?.map((country, countryIndex) => <CountryItem key={`country${countryIndex}`} {...country}/>)}
                </ul>
            ) : <></>}
        </div>
    );
}

export default Countries;