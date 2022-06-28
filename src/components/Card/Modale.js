import { useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { CardDetails } from "./CardDetails"

export const Modale = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button height='25px' fontSize='15px' color='black' _hover={{ bg: "#50C878" }} bgColor='green.100' onClick={onOpen}>Details</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader pt='30px' fontWeight="bold">Titolo Film</ModalHeader>
                    <ModalCloseButton color="red" />
                    <ModalBody>
                        <CardDetails/>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}