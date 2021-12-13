import { ScaleFade, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button } from "@chakra-ui/react";
import { FaRegShareSquare } from 'react-icons/fa';
export default function Presale() {
    return (
        <div className="presale">
            <ScaleFade initialScale={0.1} in={true}>
                <div className="presale-container">
                    <div className="presale-header">
                        <span className="title">
                            Flokidao <small>BSC</small> Presale
                        </span>
                        <span className="description">
                            Scoop up access to a flavorful variety of vetted<br />
                            projects and exclusive presales! Earn rewards<br />
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
                    <Button mb={5} width={'60%'} className="presale-action">
                        CLAIM FLOK
                    </Button>
                    <Accordion width={'80%'} allowMultiple className="presale-detail-info">
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
                                        <div className="unit-row">
                                            <div className="title"><span>Soft Cap:</span></div>
                                            <div className="value"><span>325 BNB</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Soft Cap Hit:</span></div>
                                            <div className="value"><span>✔️</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Hard Cap:</span></div>
                                            <div className="value"><span>650 BNB</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Hard Cap Hit:</span></div>
                                            <div className="value"><span>✔️</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>MIN Contribution:</span></div>
                                            <div className="value"><span>0.010 BNB</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>MAX Contribution:</span></div>
                                            <div className="value"><span>2.000 BNB</span></div>
                                        </div>
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
                                        <div className="unit-row">
                                            <div className="title"><span>Contributions:</span></div>
                                            <div className="value"><span>0.00 BNB</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Remaining MAX Contribution:</span></div>
                                            <div className="value"><span>2.00 BNB</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Purchased:</span></div>
                                            <div className="value"><span>0 FLV</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Claimed:</span></div>
                                            <div className="value"><span>0 FLV</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Maxed Out Contributions:</span></div>
                                            <div className="value"><span>❌</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Maxed Out Claims:</span></div>
                                            <div className="value"><span>❌</span></div>
                                        </div>
                                        <Button mt={5} variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>View My Wallet on BSCScan.com</Button>
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
                                        <div className="unit-row">
                                            <div className="title"><span>Presale:</span></div>
                                            <Button variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>0xF1A45556a43451E0B23d70b913FdaEd862165cAA</Button>
                                        </div>
                                        <div className="unit-row" style={{marginTop:'5px'}}>
                                            <div className="title"><span>Token:</span></div>
                                            <Button variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>0xF1a45E52d6d11D0e591d4F18DA9D88a4c266b300</Button>
                                        </div>
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
                                        <div className="unit-row">
                                            <div className="title"><span>Contributions Enabled:</span></div>
                                            <div className="value"><span>❌</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Claims Enabled:</span></div>
                                            <div className="value"><span>✔️</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Whitelist Enforced:</span></div>
                                            <div className="value"><span>❌</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Time Window Enforced:</span></div>
                                            <div className="value"><span>❌</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Cap Enforced:</span></div>
                                            <div className="value"><span>✔️</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Timed Presale Overrides Allowed</span></div>
                                            <div className="value"><span>✔️</span></div>
                                        </div>
                                        <div className="unit-row">
                                            <div className="title"><span>Capped Presale Overrides Allowed</span></div>
                                            <div className="value"><span>✔️</span></div>
                                        </div>
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