import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

import { CardDetails } from "./CardDetails";

export const Modale = ({movieId, currentMovie}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button height='25px' fontSize='15px' color='black' _hover={{ bg: "#50C878" }} bgColor='green.100' onClick={onOpen}>Details</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader pt='30px' fontWeight="bold">{currentMovie.Title}</ModalHeader>
                    <ModalCloseButton color="red" />
                    <ModalBody>
                        <CardDetails movieId={currentMovie.imdbID}/>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}