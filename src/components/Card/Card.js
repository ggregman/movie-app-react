import { Box, Image, Text } from '@chakra-ui/react';
import { Modale } from './Modale.js';

export const Card = (props) => {

    const { currentMovie, numElemento } = props;

    return (

        <Box borderWidth='1px' borderInline='outset' borderColor='white' borderStyle='solid' borderRadius='10px' maxW='250px' bgColor='white' overflow='hidden'>

            <Image src={currentMovie.Poster} alt={currentMovie.Title} />

            <Box padding='5'>

                <Box color='gray.500' fontSize='xs' textTransform='uppercase'>
                    {/* {currentMovie.Genre} | {currentMovie.runtime} */}
                </Box>

                <Text fontWeight='Bold' as='h2'>{currentMovie.Title}</Text>

                <Text>{currentMovie.Year}</Text>

                <Box display='flex' mt='2' alignItems='center' justifyContent='space-between'>
                    <Modale />
                    8.7
                   <Text> {numElemento} </Text>
                </Box>

            </Box>

        </Box>

    )
}

