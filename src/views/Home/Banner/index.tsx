import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';
import BannerInfoCard from './BannerInfoCard';

export default function Banner() {


    useEffect(()=>{

    })

    return (
        <S.Container>
             <div className="Banner">
                <div className='section'>
                    <div className='left-part'>
                        <img src='Images/Home/Banner/FlokiDAO_Logo.png' />
                        <div className='title_text'>
                                HOLD, STAKE, BOND<br />
                                $FLOK
                        </div>
                        <div className='description_text'>
                        The best reserve currencey protoco. Launching with<br />
                        the greatest APY on Binance Smart Chain
                        </div>
                    </div>
                    <div className='right-part image'>
                        <img src='Images/Home/Banner/Image.png' />
                    </div>
                </div>
                <div className='section'>
                    <div className='left-part'>
                        <Button size="lg" className='active' pl={10} pr={10} rightIcon={<FaMedium />}>Docs</Button>
                    </div>
                    <div className='right-part info-card'>
                        <BannerInfoCard title="Annual Percentage Yield" value="-" />
                        <BannerInfoCard title="Treasury Balance" value="-"/>
                        <BannerInfoCard title="Market Capitalization" value="-"/>
                        <BannerInfoCard title="Total Value Locked" value="-"/>
                    </div>
                </div>
            </div>
        </S.Container>
    )
}