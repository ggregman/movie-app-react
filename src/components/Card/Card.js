import { Box, Image, Text } from '@chakra-ui/react';
import { Modale } from './Modale.js';

export const Card = () => {

    const movie = {
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTMzNzJmMDMtZTA5ZC00YjhhLTlkMDQtNGE5YTk0NGQxOTAzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
        imageAlt: 'Uncharted',
        genere: "Action",
        titolo: 'Uncharted',
        anno: '2022',
        runtime: '123 min',
    }

    return (

        <Box borderWidth='1px' borderInline='outset' borderColor='white' borderStyle='solid' borderRadius='10px' maxW='250px' bgColor='white' overflow='hidden'>

            <Image src={movie.imageUrl} alt={movie.imageAlt} />

            <Box padding='5'>

                <Box color='gray.500' fontSize='xs' textTransform='uppercase'>
                    {movie.genere} | {movie.runtime}
                </Box>

                <Box fontWeight='Bold' as='h2'>
                    {movie.titolo}
                </Box>

                <Text>{movie.anno}</Text>

                <Box display='flex' mt='2' alignItems='center' justifyContent='space-between'>
                    <Modale />
                    8.7
                </Box>

            </Box>

        </Box>

    )
}

