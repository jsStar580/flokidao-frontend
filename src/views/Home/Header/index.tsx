import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect, useState } from 'react';

export default function Header() {

    const [scrollState, setScrollState] =useState(false);

    useEffect(() => {
        document.addEventListener('scroll',(e:Event)=>{
            const state = document.scrollingElement?.scrollTop?document.scrollingElement?.scrollTop:0;
            if(state>50){
                setScrollState(true)
            }else{
                setScrollState(false)
            }
            console.log(scrollState);
        })
    })

    return (
        <S.Container>
            <div className={scrollState?`Header solid`:`Header`}>
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
                        <ButtonGroup spacing={2}>
                            <Link to="/dashboard"><Button className='deactive'>DAPP</Button></Link>
                            <Link to="/presale"><Button className='active'>PRESALE</Button></Link>
                        </ButtonGroup>

                    </div>
                </div>
            </div>
        </S.Container>
    )
}