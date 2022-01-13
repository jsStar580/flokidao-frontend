import {
    ScaleFade,
    InputGroup,
    Input,
    InputRightElement,
    Button,
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,

} from "@chakra-ui/react";

import * as S from './styles';

export default function Calculator() {
    return (
        <S.Container>
            <div className="calculator">
                <ScaleFade initialScale={0.1} in={true}>
                    <div className="calculator-container">
                        <div className="calculator-header">
                            <span className="title">
                                Calculator
                            </span>
                            <span className="description">
                                Estimate your returns
                            </span>
                        </div>
                        <div className="overview-info">
                            <div className="info-item">
                                FLOK Price<br />
                                <span className="value">$4238.43</span>
                            </div>
                            <div className="info-item">
                                Current APY<br />
                                <span className="value">84,692.4%</span>
                            </div>
                            <div className="info-item">
                                Your sFLOK Balance<br />
                                <span className="value">0 sFLOK</span>
                            </div>
                        </div>
                        <div className="calculator-form">
                            <div className="form-item">
                                <span>sFLOK Account</span>
                                <InputGroup size='md' className="inputWithElement">
                                    <Input
                                        pr='4.5rem'
                                        placeholder='Amount'
                                        color="#fff"
                                    />
                                    <InputRightElement className="add-element" width='4.5rem'>
                                        <Button h='1.75rem' size='sm'>
                                            MAX
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </div>
                            <div className="form-item">
                                <span>APY (%)</span>
                                <InputGroup size='md' className="inputWithElement">
                                    <Input
                                        pr='4.5rem'
                                        placeholder='Amount'
                                        color="#fff"
                                    />
                                    <InputRightElement className="add-element" width='4.5rem'>
                                        <Button h='1.75rem' size='sm'>
                                            Current
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </div>
                            <div className="form-item">
                                <span>FLOK price at purchase ($)</span>
                                <InputGroup size='md' className="inputWithElement">
                                    <Input
                                        pr='4.5rem'
                                        placeholder='Amount'
                                        color="#fff"
                                    />
                                    <InputRightElement className="add-element" width='4.5rem'>
                                        <Button h='1.75rem' size='sm'>
                                            Current
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </div>
                            <div className="form-item">
                                <span>Future FLOK market price ($)</span>
                                <InputGroup size='md' className="inputWithElement">
                                    <Input
                                        pr='4.5rem'
                                        placeholder='Amount'
                                        color="#fff"
                                    />
                                    <InputRightElement className="add-element" width='4.5rem'>
                                        <Button h='1.75rem' size='sm'>
                                            Current
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="calculator-slider">
                            <div className="slider-title"><span>186 Days </span></div>
                            <Slider aria-label='slider-ex-2' colorScheme="messenger" className="calc-slider-track" defaultValue={30}>
                                <SliderTrack height={3} className="mtrack">
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb className="mthumb" />
                            </Slider>
                        </div>
                        <Box mt={10} />
                        <div className="unit-row">
                            <div className="title"><span>Your initial investment</span></div>
                            <div className="value"><span>$0</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Current wealth</span></div>
                            <div className="value"><span>$0</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>FLOK rewards estimation</span></div>
                            <div className="value"><span>0 FLOK</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Potential return</span></div>
                            <div className="value"><span>$0</span></div>
                        </div>
                        <div className="unit-row">
                            <div className="title"><span>Potential number of lambos</span></div>
                            <div className="value"><span>0</span></div>
                        </div>
                    </div>
                </ScaleFade>
            </div>
        </S.Container>
    )
}
