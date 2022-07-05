import { Button, Center, Flex, Input, Select } from "@chakra-ui/react";
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
    <Flex alignItem='center'>
      <Select marginTop='-2' focusBorderColor="#50C878" _focus='#50C878' onClick={(e) => changeContextType(e)} marginX='5px' size='md' w='125px'>
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
        mr="5px"
        type='text'
        onChange={inputHandler}
      />

      <Button w='auto' disabled={status === 'submitting' || keyword.length === 0}
        color="black" _hover={{ bg: "#309953" }} bgColor="#50C878" onClick={() => searchCallback(keyword, contextType)}>
        Search
      </Button>
    </Flex>
  );
};
