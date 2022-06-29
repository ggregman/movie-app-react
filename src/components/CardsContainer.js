import { Center, SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card/Card.js";

export const CardsContainer = (props) => {
  const { movies } = props;

  return (
    <>
      <Center m="20px" color="white">
        {movies.length > 0
          ? "Risultati (" + movies.length + ")"
          : "Esegui una ricerca"}
      </Center>
      <Center>
        <SimpleGrid
          maxW="80%"
          spacing="20px"
          marginTop="20px"
          marginBottom="50px"
          minChildWidth="200px"
        >
          {movies.map((movie, index) => (
            <Card currentMovie={movie} key={index} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
