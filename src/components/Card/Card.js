import { Box, Image, Text } from "@chakra-ui/react";
import { Modale } from "./Modale.js";

export const Card = (props) => {

  const { currentMovie } = props;

  return (
    <Box
      borderWidth="1px"
      borderInline="outset"
      borderColor="white"
      borderStyle="solid"
      borderRadius="10px"
      maxW="250px"
      bgColor="white"
      overflow="hidden"
    >
      <Image src={currentMovie.Poster} alt={currentMovie.Title} />
      <Box padding="5">
        <Text fontWeight="Bold" as="h2">
          {currentMovie.Title}
        </Text>

        <Text>{currentMovie.Year}</Text>

        <Box
          display="flex"
          mt="2"
          alignItems="center"
          justifyContent="space-between"
        >
          <Modale movieId={currentMovie.imdbID} currentMovie={currentMovie} />
        </Box>
      </Box>
    </Box>
  );
};
