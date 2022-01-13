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
    useToast,
    InputGroup,
    Input,
    InputRightElement
} from "@chakra-ui/react";
import { FaRegShareSquare } from 'react-icons/fa';
import PresaleAddresses from "./components/IfoCard/PresaleAddresses";
import PresaleInfo from "./components/IfoCard/PresaleInfo";
import PresaleLimits from "./components/IfoCard/PresaleLimits";
import PresaleMyDetails from "./components/IfoCard/PresaleMyDetails";
import PresaleRules from "./components/IfoCard/PresaleRules";
import PresaleTimes from "./components/IfoCard/PresaleTimes";

import { usePublicPresaleFLOKIContract } from 'hooks/useContract'
import { useTypedSelector } from 'hooks/useTypeSelector'
import { useEffect, useState } from "react";
import UnlockButton from "components/UnlockButton";
import useBalanceBNB from "hooks/useBalanceBNB";
import AnimatedNumbers from "./components/IfoCard/AnimatedNumbers";
import { useFLOKIPerNativeCoin } from "hooks/usePresaleTokensPerBNB";
import { useMaxContribution, useMinContribution } from "hooks/usePresaleLimits";

import * as S from './styles';


export default function Presale() {


    const publicPresaleContract = usePublicPresaleFLOKIContract()
    const { wallet } = useTypedSelector((state) => state.wallet);

    const balanceBNB = useBalanceBNB();
    const nativePerBNB = useFLOKIPerNativeCoin(publicPresaleContract);
    const maxContributeBNB = useMaxContribution(publicPresaleContract);
    const minContributeBNB = useMinContribution(publicPresaleContract);

    const [contributeValue, setContibuteValue] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()


    const changedContributeValue = (value: any) => {
        setContibuteValue(value)
    }


    const confirmPressed = async () => {
        try {
            
            await publicPresaleContract.methods.contribute().send({ value: contributeValue * 1e18, from: wallet, gas: 200000 });
            toast({
                variant: 'left-accent',
                position: 'top-right',
                title: '',
                description: "successfully contributed to Presale",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } catch (err) {
            toast({
                variant: 'left-accent',
                position: 'top-right',
                title: '',
                description: "An error occurred confirming transaction",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }


    const useCountdownToPresaleSTART = (contract: any) => {
        // GETS DATA AFTER 1 SECOND DELAY
        const [state, setCountdownToPresaleSTART] = useState([]);
        useEffect(() => {
            const interval = setTimeout(async () => {
                const _state = await contract.methods.getTimes().call()
                setCountdownToPresaleSTART(_state)
                //console.log(_state)
            }, 1000)
            return () => clearInterval(interval)
        }, [contract])
        // GETS DATA AFTER 1 SECOND DELAY
        const presaleSTART = state[4]
        return presaleSTART
    }

    const useCountdownToPresaleEND = (contract: any) => {
        // GETS DATA AFTER 1 SECOND DELAY
        const [state, setCountdownToPresaleEND] = useState([]);
        useEffect(() => {
            const interval = setTimeout(async () => {
                const _state = await contract.methods.getTimes().call()
                setCountdownToPresaleEND(_state)
                //console.log(_state)
            }, 1000)
            return () => clearInterval(interval)
        }, [contract])
        // GETS DATA AFTER 1 SECOND DELAY
        const presaleEND = state[5]
        return presaleEND
    }

    const countdownToPresale = useCountdownToPresaleSTART(publicPresaleContract)
    const countdownToEnd = useCountdownToPresaleEND(publicPresaleContract)

    return (
        <S.Container>
            <div className="presale">
                <ScaleFade initialScale={0.1} in={true}>
                    <div className="presale-container">
                        <div className="presale-header">
                            <span className="title">
                                Floki Presale
                            </span>
                            <span className="description">
                                Scoop up access to a flavorful variety of vetted
                                projects and exclusive presales! Earn rewards
                                through every melty drip.
                            </span>
                        </div>
                        <div className="info">
                            <PresaleInfo />
                        </div>
                        <div className="info">
                            <PresaleTimes />
                        </div>
                        {
                            (wallet && wallet != "") ? (
                                <>
                                    {
                                        countdownToPresale <= 0 ? (
                                            <>
                                                {
                                                    countdownToEnd <= 0 ? (
                                                        <Button colorScheme="blue" disabled bgColor="gray" variant="subtle" width="100%">
                                                            ❗️SOLD OUT❗️
                                                        </Button>
                                                    ) :
                                                        <Button mb={5} width={'60%'} className="presale-action" onClick={onOpen}>
                                                            Contribute FLOK
                                                        </Button>
                                                }
                                            </>
                                        ) :
                                            <Button disabled variant="solid" width="100%">
                                                ...waiting for presale to start
                                            </Button>
                                    }
                                </>
                            ) : (<UnlockButton />)
                        }
                        <Accordion mt={4} width={'80%'} allowMultiple className="presale-detail-info">
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
                <Modal size="lg" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} colorScheme="facebook">
                    <ModalOverlay />
                    <ModalContent className="contribute-modal">
                        <ModalHeader color="#0078ff" borderBottom="1px solid #cdcdcd">Contribute to Presale</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <div className="contribute-form">
                                <div className="contribute-item">
                                    <span>Balance: </span>
                                    <span>
                                        <AnimatedNumbers decimals={3} value={balanceBNB / 1e18} suffix={' BNB'} />
                                    </span>
                                </div>
                                <div className="contribute-item">
                                    <span>Rate: </span>
                                    <span><AnimatedNumbers decimals={0} value={nativePerBNB / 1e9} suffix={''} /> FLOK per BNB </span>
                                </div>
                                <InputGroup size='lg'>
                                    <Input
                                        pr='4.5rem'
                                        placeholder='Amount'
                                        color="black"
                                        boxShadow="rgb(0 0 0 / 20%) 0px 2px 2px -1px inset"
                                        paddingRight="150px"
                                        background="#dddddd"
                                        type="number"
                                        value={contributeValue}
                                        onChange={(e) => { changedContributeValue(e.target.value) }}
                                    />
                                    <InputRightElement width='4.5rem' right="30px">
                                        <Button
                                            onClick={() => { changedContributeValue(maxContributeBNB / 1e18) }}
                                            className="custom-button" h='1.75rem' size='sm' right="5px" fontSize="17px" style={{ padding: "0 40px" }} >
                                            MAX
                                        </Button>
                                        BNB
                                    </InputRightElement>
                                </InputGroup>
                                {
                                    (contributeValue < (minContributeBNB / 1e18) || contributeValue > (maxContributeBNB / 1e18)) &&
                                    <span style={{ marginTop: '3px', color: 'red' }}>the value must be between {minContributeBNB / 1e18} - {maxContributeBNB / 1e18}</span>
                                }
                                <div className="contribute-item" style={{ marginTop: '10px' }}>
                                    <span>Contribute up to &nbsp;
                                        <span><AnimatedNumbers decimals={3} value={maxContributeBNB / 1e18} suffix={' BNB'} /> </span>
                                        and Confirm Transaction</span>
                                </div>
                                <div className="contribute-item" style={{ marginTop: '15px' }}>
                                    <span>You will be able to claim:&nbsp;</span>
                                    <span><AnimatedNumbers decimals={0} value={contributeValue * nativePerBNB / 1e9} suffix={' FLOK'} /></span>
                                </div>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button size="lg" disabled={contributeValue < (minContributeBNB / 1e18) || contributeValue > (maxContributeBNB / 1e18)} className="custom-button" mr={3} onClick={() => confirmPressed()}>
                                Confirm
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </S.Container>
    );
}

function publicPresaleContract(publicPresaleContract: any) {
    throw new Error("Function not implemented.");
}
