import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';

export default function Home() {


    useEffect(()=>{
        // const headers = { 'Content-Type': 'application/json','X-CMC_PRO_API_KEY':'74b45c73-d6a3-4807-9b51-203d974ad3cb' }
        // fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', { headers })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     });
    })

    return (
        <S.Container>
            <div className="home">
                <div className="page-header">
                    <div className="page-links">
                        <ButtonGroup mt={5} spacing={10}>
                            <Button>DAPP</Button>
                            <Button>DAPP</Button>
                            <Button>DAPP</Button>
                            <Link to="/dashboard"><Button className='active'>DAPP</Button></Link>
                        </ButtonGroup>
                    </div>
                    <div className="page-logo">F<small>LOKI</small>D<small>AO</small></div>
                </div>

                <div className="section">
                    <div>
                        <div className='description'>
                            <div className='description_title'>THE PEOPLES DAO</div>
                            <div className='description_body'>
                                BACKEND WITH
                                <Box height="20px"></Box>
                                WORLD LEADING ASSET CLASSES
                            </div>
                            <Link to="/presale">
                                <Button mt={70} className='presaleBtn' size="lg" zIndex="2" height="70px" width="250px" style={{ borderRadius: '0px', backgroundColor: "yellow" }}>P<small>RESALE</small></Button>
                            </Link>

                        </div>
                    </div>
                    <img src='Images/Home/logo1.png' width="400px" alt="main-logo" />
                </div>
                <div className="section">
                    <img src='Images/Home/sketch-bank.png' width="80%" style={{ position: 'fixed', bottom: '0px' }} alt="squid-game-piggy-bank" />
                    <div className='home-footer'>
                        <div className='social-links'>
                            <ButtonGroup spacing={6}>
                                <Button variant="link"><FaTwitter /></Button>
                                <Button variant="link"><FaTelegram /></Button>
                                <Button variant="link"><FaMedium /></Button>
                            </ButtonGroup>
                        </div>
                        <div className='other-links'>
                            PROTOCOL <big>O</big>WNED <big>L</big>IQUIDITY | <big>G</big>ROWING <big>T</big>REASURY | <big>D</big>ECENTRALIZED <big>G</big>OVERNANCE
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    )
}