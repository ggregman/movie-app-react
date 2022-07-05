import { ArrowDownIcon } from "@chakra-ui/icons";
import { Center, VStack, SimpleGrid, Text } from "@chakra-ui/react";
import { Card } from "./Card/Card.js";
import CustomCardContainer from "./CustomCard/CustomCardContainer";

export const CardsContainer = (props) => {

  const { movies } = props;


  return (
    <>

      <Center mt='50px' color="white">
        {movies && movies.length > 0
          ? "Results (" + movies.length + ")"
          : "Search something 🔍"}
      </Center>
      <Center>
        <SimpleGrid
          maxW="80%"
          spacing="20px"
          marginTop="20px"
          marginBottom="50px"
          minChildWidth="200px"
        >
          {
            movies && movies.length > 0 &&
            movies.map((movie, index) => <Card currentMovie={movie} key={index} />)
          }

          {
            movies && movies.length === 0 && <>
            <VStack>
            <Text color='white'>Sorry! No results found 😔 </Text>
            <Text color='white'>Try again or</Text>
            
            
          <Center marginTop='50px'><ArrowDownIcon color='white' /></Center>
         
          <Center marginTop='250px'><CustomCardContainer /></Center></VStack></>
          }

        </SimpleGrid>
      </Center>
      </>
      );

};
