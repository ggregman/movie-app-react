import { Text, VStack } from "@chakra-ui/react";

const CustomCardDetails = () => {

    return (
        <VStack pb='25px' spacing='4' align='flex-start'>
                <Text><b>Plot:</b> </Text>
                <Text><b>Year:</b> </Text>
                <Text><b>Genre:</b> </Text>
                <Text><b>Runtime:</b> </Text>
                <Text><b>Director:</b> </Text>
                <Text><b>Actors:</b> </Text>
                <Text><b>imdbRating:</b></Text>
            </VStack>
    )

}

export default CustomCardDetails;