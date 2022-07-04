import "./App.css";

import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { searchMovies } from "./api/getMovies";
import { CardsContainer } from "./components/CardsContainer";
import { NavBar } from "./components/NavBar";

// shift+alt+o = elimina import che non servono
// ctrl+ù = per commentareasdas

function App() {
  //let movies = []; // E' una variabile locale che non scatena nessun aggiornamento nel virtual DOM (render)

  // Dichiaro movies com una variabile di stato usando la funzione useState()
  // useState (inizia con "use") è una funzione particolare di React che viene definita hooks
  const [movies, setMovies] = useState();

  const [contextType, setContextType] = useState('movie');

  const searchCallback = async (keywords) => {
    if (keywords === "") return;
    const movies = await searchMovies(keywords);
    setMovies(movies);
  }

  // Per aggiornare movies non posso usare istruzinoi di assegnazione es. movies = [.....]
  // Devo per forza usare la funzione apposita che viene restituita da useState() nel nostro caso setMovies
  // Dopo l'esecuzione di setMovies il valore all'interno della variabile di stato movies viene aggiornato

  // const changeContextType = (e) => {
  //   setContextType(e);
  // }

  return (
    <ChakraProvider>
      <Box backgroundColor="black">
        <NavBar searchCallback={searchCallback} />
        <Center marginTop='7' color='white'>
          {/* <HStack spacing='5'>
            <Button onClick={()=>changeContextType('movie')} variant='ghost' _hover={{ bg: '#50C878' }}>Movies</Button>
            <Button onClick={()=>changeContextType('series')} variant='ghost' _hover={{ bg: '#50C878' }}>Tv Shows</Button>
            <Button onClick={()=>changeContextType('game')} variant='ghost' _hover={{ bg: '#50C878' }}>Games</Button>
          </HStack> */}
        </Center>
        <CardsContainer movies={movies} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
