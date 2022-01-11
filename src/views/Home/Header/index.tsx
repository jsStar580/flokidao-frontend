import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';

export default function Header() {


    useEffect(() => {

    })

    return (
        <S.Container>
            <div className="Header">
                <span className='name'>FlokiDao</span>
                <div className='right-bar'>
                    <div className='social-buttons'>
                        <a href="#">
                            <img src='Images/Home/Header/discord.png' />
                        </a>
                        <a href="#">
                            <img src='Images/Home/Header/telegram.png' />
                        </a>
                        <a href="#">
                            <img src='Images/Home/Header/medium.png' />
                        </a>
                        <a href="#">
                            <img src='Images/Home/Header/twitter.png' />
                        </a>
                    </div>
                    <div className='action-buttons'>
                        <ButtonGroup spacing={3} ml={8}>
                            <Button className='deactive' size="lg">DAPP</Button>
                            <Button className='active' size="lg">PRESALE</Button>
                        </ButtonGroup>

                    </div>
                </div>
            </div>
        </S.Container>
    )
}