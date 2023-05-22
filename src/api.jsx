export const API_URL = "https://v3.football.api-sports.io/";

export function STATUS_GET(apiKey) {
    return {
        url: API_URL + "status",
        options: {
            method: "GET",
            headers: {
                "x-rapidapi-key": apiKey,
            }
        }
    }
}

export function COUNTRIES_GET(apiKey, search = "") {
    return {
        url: API_URL + `countries?${search ? `search=${search}` : ""}`,
        options: {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
		        "x-rapidapi-key": apiKey,
            }
        }
    }
}

export function LEAGUES_GET(apiKey, id = 0, code = "") {
    return {
        url: API_URL + `leagues?${id ? `id=${id}` : (code ? `code=${code}` : "")}`,
        options: {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
		        "x-rapidapi-key": apiKey,
            }
        }
    }
}

export function TEAMS_GET(apiKey, league, season) {
    return {
        url: API_URL + `teams?league=${league}&season=${season}`,
        options: {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
		        "x-rapidapi-key": apiKey,
            }
        }
    }
}