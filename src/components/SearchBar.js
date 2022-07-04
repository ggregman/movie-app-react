import { Button, Center, Input } from "@chakra-ui/react";
import { useState } from "react";

export const SearchBar = (props) => {
  const { searchCallback } = props;
  const [ keyword, setKeyword ] = useState("");

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setKeyword(lowerCase);
  };

  return (
    <Center>
      <Input
        bgColor="white"
        placeholder="Digita qualcosa..."
        w="200px"
        h="40px"
        mr="10px"
        type='text'
        onChange={inputHandler}
      />

      <Button color="black" _hover={{ bg: "#309953" }} bgColor="#50C878" onClick={() => searchCallback(keyword)}>
        Cerca
      </Button>
    </Center>
  );
};
