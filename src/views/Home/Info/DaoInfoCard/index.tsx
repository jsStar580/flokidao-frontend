import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';

export default function DaoInfoCard(props:any) {


    useEffect(()=>{

    })

    return (
        <S.Container>
            <div className="DaoInfoCard">
                <span className='DaoInfoCat'>{props.cat}</span>
                <span className='DaoInfoTitle'>{props.title}</span>
                <span className='DaoInfoDescription'>{props.description}</span>
            </div>
        </S.Container>
    )
}