import { Button, Center, Input } from "@chakra-ui/react";
import { useState } from "react";

export const SearchBar = (props) => {
  const { searchCallback } = props;
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState('submitting');

  const inputHandler = (e) => {
    setKeyword(e.target.value.toLowerCase());
    setStatus("typing");
  };

  return (
    <Center>
      <Input
        bgColor="white"
        placeholder="Type something..."
        w="200px"
        h="40px"
        mr="10px"
        type='text'
        onChange={inputHandler}
      />

      <Button disabled={status === 'submitting' || keyword.length === 0}
        color="black" _hover={{ bg: "#309953" }} bgColor="#50C878" onClick={() => searchCallback(keyword)}>
        Search
      </Button>
    </Center>
  );
};
