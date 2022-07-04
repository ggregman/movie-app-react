import axios from "axios";

const baseURL = 'https://www.omdbapi.com/?apikey=';
const apiKey = 'f6e1faa9';
const apiURL = baseURL + apiKey;

export const searchMovies = async (keywords) => {
    const response = await axios.get(
        `${apiURL}&s=${keywords}`
    );
    return response.data.Response === "False" ? [] : response.data.Search;
}

export const searchMovieDetails = async (codice) => {
    const response2 = await axios.get(
        `${apiURL}&i=${codice}`
    );
    return response2.data;
}