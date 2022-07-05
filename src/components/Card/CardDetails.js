import { Text, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { searchMovieDetails } from "../../api/getMovies";

export const CardDetails = ({ movieId }) => {

    const [movieDetails, setMovieDetails] = useState();

    const onLoad = async () => {
        const movie = await searchMovieDetails(movieId);
        setMovieDetails(movie);
    }

    useEffect(() => { onLoad() }, [])
    
    return (
        movieDetails ? (
            <VStack pb='25px' spacing='4' align='flex-start'>
                <Text><b>Plot:</b> {movieDetails.Plot}</Text>
                <Text><b>Year:</b> {movieDetails.Year}</Text>
                <Text><b>Genre:</b> {movieDetails.Genre}</Text>
                <Text><b>Runtime:</b> {movieDetails.Runtime}</Text>
                <Text><b>Director:</b> {movieDetails.Director}</Text>
                <Text><b>Actors:</b> {movieDetails.Actors}</Text>
                <Text><b>imdbRating:</b> {movieDetails.imdbRating}</Text>
            </VStack>) : null
    )
}