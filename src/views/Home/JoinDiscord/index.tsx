import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';

export default function JoinDiscord() {


    useEffect(()=>{

    })

    return (
        <S.Container>
             <div className="JoinDiscord">
                <span className='title'>To Get Latest Announcement<br />Join our Discord Today</span>
                <a href='https://discord.gg/C9UYjPXpr8' target="_blank"><Button size="lg" bg="#f2b42a" paddingLeft={20} paddingRight={20}>Join</Button></a>
                
            </div>
        </S.Container>
    )
}