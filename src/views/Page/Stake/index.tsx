import {
    ScaleFade,
    InputGroup,
    Input,
    InputRightElement,
    Button,
    Box
} from "@chakra-ui/react";

import * as S from './styles';

export default function Stake() {
    return (
        <S.Container>
            <div className="stake">
                <ScaleFade initialScale={0.1} in={true}>
                    <div className="stake-container">
                        <div className="stake-header">
                            <span className="title">
                                FLOK Staking
                            </span>
                            <span className="description">
                                4 Hours, 30 Mins to Next Rebase
                            </span>
                        </div>
                        <div className="overview-info">
                            <div className="info-item">
                                APY<br />
                                <span className="value">84,692.4%</span>
                            </div>
                            <div className="info-item">
                                TVL<br />
                                <span className="value">$1,478,217,189</span>
                            </div>
                            <div className="info-item">
                                Current Index<br />
                                <span className="value">5.68 FLOK</span>
                            </div>
                        </div>
                        <div className="stacking-form">

                            <InputGroup size='md' className="inputWithElement">
                                <Input
                                    pr='4.5rem'
                                    placeholder='Amount'
                                    color="#fff"
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm'>
                                        MAX
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button ml={3}>Approve</Button>

                        </div>
                        <Box mt={10} />
                        <div className="unit-row">
                            <div className="title"><span>Your Balance</span></div>
                            <div className="value"><span>0 FLOK</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Your Staked Balance</span></div>
                            <div className="value"><span>0 sFLOK</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Wrapped Balance</span></div>
                            <div className="value"><span>o wsFLOK</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Exchange rate</span></div>
                            <div className="value"><span>1 wsFLOK = 25.5898 sFLOK</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Next Reward Amount</span></div>
                            <div className="value"><span>0 sFLOK</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Next Reward Yield</span></div>
                            <div className="value"><span>0.6176%</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>ROI (5-Day Rate)</span></div>
                            <div className="value"><span>9.6767%</span></div>
                        </div>
                    </div>
                </ScaleFade>
            </div>
        </S.Container>
    )
}
