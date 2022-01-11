import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';
import Banner from './Banner';
import Info from './Info';
import Feature from './Feature';
import Distribution from './Distribution';
import Header from './Header';

export default function Home() {


    useEffect(()=>{
    })

    return (
        <S.Container>
            <div className="home">
                <Header />
                <Banner />
                <Info />
                <Feature />
                <Distribution />
            </div>
        </S.Container>
    )
}