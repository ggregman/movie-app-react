import { Button, Center, Input } from "@chakra-ui/react"

export const SearchBar = () => {

  return (
    <Center>
   
        <Input bgColor="white" placeholder='Digita qualcosa...' w="200px" h='40px' />

        <Button color='black' _hover={{ bg: "#309953" }} bgColor='#50C878' >Cerca</Button>
        
    </Center>
  )
}
