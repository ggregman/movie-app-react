import { Button, Center, Input } from "@chakra-ui/react";

export const SearchBar = (props) => {
  const { searchCallback } = props;
  return (
    <Center>
      <Input
        bgColor="white"
        placeholder="Digita qualcosa..."
        w="200px"
        h="40px"
        mr="10px"
      />
      <Button color="black" _hover={{ bg: "#309953" }} bgColor="#50C878" onClick={() => searchCallback("Terminator")}>
        Cerca
      </Button>
    </Center>
  );
};
