import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';

export default function BannerInfoCard(props:any) {


    useEffect(()=>{

    })

    return (
        <S.Container>
             <div className="BannerInfoCard">
                 <img src='Images/Home/Banner/bone.png' />
                 <div className='info-body'>
                    <span>{props.title}</span>
                    <span>{props.value}</span>
                 </div>
                
            </div>
        </S.Container>
    )
}