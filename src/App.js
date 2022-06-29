import "./App.css";

import { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CardsContainer } from "./components/CardsContainer";
import { NavBar } from "./components/NavBar";
import {filterMovies, getMovies} from "./api/getMovies";

// shift+alt+o = elimina import che non servono
// ctrl+ù = per commentare

function App() {
  //let movies = []; // E' una variabile locale che non scatena nessun aggiornamento nel virtual DOM (render)

  // Dichiaro movies com una variabile di stato usando la funzione useState()
  // useState (inizia con "use") è una funzione particolare di React che viene definita hooks
  const [movies, setMovies] = useState([]);


  const searchMovies = (keywords) => {
    console.log(keywords);
    // Per aggiornare movies non posso usare istruzinoi di assegnazione es. movies = [.....]
    // Devo per forza usare la funzione apposita che viene restituita da useState() nel nostro caso setMovies
    // Dopo l'esecuzione di setMovies il valore all'interno della variabile di stato movies viene aggiornato
    setMovies(filterMovies(keywords));
  }

  return (
    <ChakraProvider>
      <Box backgroundColor="black">
        <NavBar searchCallback={searchMovies} />
        <CardsContainer movies={movies} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
