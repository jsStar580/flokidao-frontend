import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';

export default function BannerInfoCard() {


    useEffect(()=>{

    })

    return (
        <S.Container>
             <div className="BannerInfoCard">
                 <img src='Images/Home/Banner/bone.png' />
                <span>fdsfdsafddsafdsdfasf</span>
            </div>
        </S.Container>
    )
}