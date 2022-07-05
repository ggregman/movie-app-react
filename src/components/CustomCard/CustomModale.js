import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import CustomCardDetails from './CustomCardDetails'

const CustomModale = ({title,year}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button height='25px' fontSize='15px' color='black' _hover={{ bg: "#50C878" }} bgColor='green.100' onClick={onOpen}>Details</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader pt='30px' fontWeight="bold">{title}</ModalHeader>
                    <ModalCloseButton color="red" />
                    <ModalBody>
                        <CustomCardDetails title={title} year={year}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}

export default CustomModale;