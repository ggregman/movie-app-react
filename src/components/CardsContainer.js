import { Center, SimpleGrid } from "@chakra-ui/react"
import { Card } from "./Card/Card.js"

export const CardsContainer = () => {
    return (
        <>

        
            <Center m="20px" color='white'>
                Risultati (10)
            </Center>

            <Center>

                <SimpleGrid maxW="80%" spacing='20px' marginTop="20px" marginBottom='50px' minChildWidth="200px" >

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </SimpleGrid>

            </Center>
        </>
    )
}