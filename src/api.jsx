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

export function COUNTRIES_GET(apiKey, {search = ""}) {
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