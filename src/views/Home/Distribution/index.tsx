import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium, FaArrowRight } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';

export default function Distribution() {


    useEffect(()=>{

    })

    return (
        <S.Container>
             <div className="Distribution">
                <div className='header'>
                    <span className="title">Distribution</span>
                    <a href='https://flokidao.medium.com' target="_blank"><Button rightIcon={<FaArrowRight />}>Read More</Button></a>
                </div>
                <div className='body'>
                    <img src='Images/Home/Distribution/pie.svg' width="100%" />
                </div>
            </div>
        </S.Container>
    )
}