import { Box, Flex,Editable, EditableInput, EditablePreview, EditableTextarea, VStack } from "@chakra-ui/react";

const CustomCardDetails = ({ year }) => {

    return (
        <VStack pb='25px' spacing='4' align='flex-start'>
            <Box><b>Plot:</b>
                <Editable defaultValue='Write here your plot. (Click to edit)'>
                    <EditablePreview />
                    <EditableTextarea />
                </Editable>
            </Box>
            <Flex><b>Year:</b>{" "}{year}</Flex>
            <Flex alignItems='center'><b>Genre:</b>
                <Editable marginLeft='1' defaultValue='Action, Adventure... (Click to edit)'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </Flex>
            <Flex alignItems='center'><b>Runtime:</b>
                <Editable marginLeft='1'  defaultValue='120 min (Click to edit)'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </Flex>
            <Flex alignItems='center'><b>Director:</b>
                <Editable marginLeft='1'  defaultValue='Peter Jackson... (Click to edit)'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </Flex>
            <Flex alignItems='center'><b>Actors:</b>
                <Editable marginLeft='1'  defaultValue='Johnny Depp, Brad Pitt... (Click to edit)'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </Flex>
            <Flex alignItems='center'><b>imdbRating:</b>
                <Editable marginLeft='1'  defaultValue='10/10'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </Flex>
        </VStack>
    )

}

export default CustomCardDetails;