import './App.css';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { CardsContainer } from './components/CardsContainer';
import { NavBar } from './components/NavBar';

// shift+alt+o = elimina import che non servono
// ctrl+ù = per commentare

function App() {

  return (

    <ChakraProvider>

      <Box backgroundColor="black">

        <NavBar />
        <CardsContainer />

      </Box>

    </ChakraProvider>
  )
}

export default App;
