import { Box, Image, Text } from "@chakra-ui/react";
import  CustomModale  from "./CustomModale";


const CustomCard = ({title, year}) => {

    return (
        <>
            <Box
                borderWidth="1px"
                borderInline="outset"
                borderColor="white"
                borderStyle="solid"
                borderRadius="10px"
                maxW="250px"
                bgColor="white"
                overflow="hidden"
            >
                <Image src={'public\logo512.png'} alt={''} />
                <Box padding="5">
                    <Text fontWeight="Bold" as="h2">
                        {title}
                    </Text>

                    <Text>{year} | type</Text>

                    <Box
                        display="flex"
                        mt="2"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <CustomModale />
                    </Box>
                </Box>
            </Box>
        </>
    )

}

export default CustomCard;