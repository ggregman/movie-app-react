import { Center, SimpleGrid } from "@chakra-ui/react"
import { getMovies } from "../api/getMovies.js"
import { Card } from "./Card/Card.js"

export const CardsContainer = () => {

    const movies = getMovies();

    return (
        <>
            <Center m="20px" color='white'>
                Risultati (10)
            </Center>

            <Center>

                <SimpleGrid maxW="80%" spacing='20px' marginTop="20px" marginBottom='50px' minChildWidth="200px" >

                    {
                        movies.map( (movie, Index) => <Card currentMovie={movie} numElemento={Index}/>)
                    }

                </SimpleGrid>

            </Center>
        </>
    )
}