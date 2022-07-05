import { Box, Button, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CustomCard from "./CustomCard";

const CustomCardContainer = () => {

    const [year, setYear] = useState();
    const [title, setTitle] = useState();


    return (
        <>
            <VStack spacing='40px' marginBottom='250px'>
                <Heading color='white'>Custom Card 💡</Heading>
                <CustomCard title={title} year={year} />

                <VStack>
                    <Input placeholder="Insert title here..." w='200px' h='20px' />
                    <Input placeholder="Insert year here..." w='200px' h='20px' />
                    <Input placeholder="Insert type here..." w='200px' h='20px' />
                </VStack>
            </VStack>
        </>
    )

}

export default CustomCardContainer;