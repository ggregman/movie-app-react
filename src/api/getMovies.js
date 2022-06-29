import axios from "axios";
import { arrMovies } from "../mocks/mockMovies"

export const getMovies = () => {
    return arrMovies.Search;
}

export const searchMovies = async (keywords) => {

    const response = await axios.get(
        `https://www.omdbapi.com/?apikey=f6e1faa9&s=${keywords}`
    );

    return response.data.Response === "False" ? [] : response.data.Search; 
}
