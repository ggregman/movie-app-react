import { Button, Center, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

export const SearchBar = (props) => {
  const { searchCallback } = props;
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState('submitting');
  const [contextType, setContextType] = useState('movie');

  const changeContextType = (e) => {
    setContextType(e.target.value);
    console.log(contextType);
  }

  const inputHandler = (e) => {
    setKeyword(e.target.value.toLowerCase());
    setStatus("typing");
  };

  return (
    <Center alignItems='center'>
      <Select onClick={(e) => changeContextType(e)} marginX='5px' size='md' w='150px'>
        <option value='movie'>Movie</option>
        <option value='series'>Tv Shows</option>
        <option value='game'>Game</option>
      </Select>
      <Input
        focusBorderColor="#50C878"
        bgColor="white"
        placeholder="Type something..."
        w="200px"
        h="40px"
        mr="10px"
        type='text'
        onChange={inputHandler}
      />

      <Button disabled={status === 'submitting' || keyword.length === 0}
        color="black" _hover={{ bg: "#309953" }} bgColor="#50C878" onClick={() => searchCallback(keyword, contextType)}>
        Search
      </Button>
    </Center>
  );
};
