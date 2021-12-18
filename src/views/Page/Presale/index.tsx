import { 
    ScaleFade, 
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon, 
    Box, 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast
 } from "@chakra-ui/react";
import { FaRegShareSquare } from 'react-icons/fa';
import PresaleAddresses from "./components/IfoCard/PresaleAddresses";
import PresaleLimits from "./components/IfoCard/PresaleLimits";
import PresaleMyDetails from "./components/IfoCard/PresaleMyDetails";
import PresaleRules from "./components/IfoCard/PresaleRules";
export default function Presale() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    return (
        <div className="presale">
            <ScaleFade initialScale={0.1} in={true}>
                <div className="presale-container">
                    <div className="presale-header">
                        <span className="title">
                            FLOK Presale
                        </span>
                        <span className="description">
                            Scoop up access to a flavorful variety of vetted
                            projects and exclusive presales! Earn rewards
                            through every melty drip.
                        </span>
                    </div>
                    <div className="overview-info">
                        <div className="info-item">
                            Total Contributes<br />
                            <span className="value">650 BNB</span>
                        </div>
                        <div className="info-item">
                            Hard Cap<br />
                            <span className="value">650 BNB</span>
                        </div>
                        <div className="info-item">
                            FLOK per BNB<br />
                            <span className="value">100,000</span>
                        </div>
                    </div>
                    <Button mb={5} width={'60%'} className="presale-action"  onClick={onOpen}>
                        CLAIM FLOK
                    </Button>
                    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} colorScheme="facebook">
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader color="#0078ff">Claim FLOK</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            Confirm Transaction
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='messenger' mr={3} onClick={()=>toast({
                                position: 'top-right',
                                title: 'Account created.',
                                description: "An error occurred confirming transaction",
                                status: 'error',
                                duration: 9000,
                                isClosable: true,
                                })}>
                                Confirm
                            </Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <Accordion width={'80%'} allowMultiple defaultIndex={0} className="presale-detail-info">
                        <AccordionItem className="item">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton className="item-title">
                                            <Box flex='1' textAlign='left'>
                                                {isExpanded ? (
                                                    <>Hide Contribution Limits</>
                                                ) : (
                                                    <>Show Contribution Limits</>
                                                )}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} className="item-body">
                                       <PresaleLimits />
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem className="item">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton className="item-title">
                                            <Box flex='1' textAlign='left'>
                                                {isExpanded ? (
                                                    <>Hide My Info</>
                                                ) : (
                                                    <>Show My Info</>
                                                )}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} className="item-body">
                                        <PresaleMyDetails />
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem className="item">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton className="item-title">
                                            <Box flex='1' textAlign='left'>
                                                {isExpanded ? (
                                                    <>Hide Addresses</>
                                                ) : (
                                                    <>Show Addresses</>
                                                )}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} className="item-body">
                                        <PresaleAddresses />
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem className="item">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton className="item-title">
                                            <Box flex='1' textAlign='left'>
                                                {isExpanded ? (
                                                    <>Hide Rules</>
                                                ) : (
                                                    <>Show Rules</>
                                                )}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} className="item-body">
                                       <PresaleRules />
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                    </Accordion>
                </div>
            </ScaleFade>
        </div>
    );
}