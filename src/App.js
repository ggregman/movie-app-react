import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';


/*
const MyButton = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("Hai cliccato!");
    setCount(count+1);
  }

  return (
    <button onClick={handleClick}>
      I'm a button, clicked {count} times.
    </button>
  );
}*/



const MyButton = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>Bottone cliccato {count} volte</button>

}

function App() {



  const movies = [

    {
      title: "Terminator",
      year: "2001",
      genre: "Action"
    },

    {
      title: "Terminator 2",
      year: 2005,
      genre: "Action"
    },

    {
      title: "Terminator 3",
      year: 2008,
      genre: "Action"
    }

  ];

  return (

    <ChakraProvider>
      <div className="App">

        <table>
          <th>Movies</th><th>Year</th><th>Genre</th>

          {
            movies.map(element =>
              <tr>

                <td><h1>{element.title}</h1></td>
                <td><p>{element.year}</p></td>
                <td><p>{element.genre}</p></td>

              </tr>)
          }

        </table>

      </div>

      <MyButton />

    </ChakraProvider>
  )
}

export default App;
