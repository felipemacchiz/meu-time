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