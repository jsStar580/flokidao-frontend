import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaTwitter, FaMedium, FaBook, FaGit } from 'react-icons/fa';
import { GiBookAura, GiBookCover, GiDoctorFace } from 'react-icons/gi';

import * as S from './styles';
import { useEffect } from 'react';
import BannerInfoCard from './BannerInfoCard';

export default function Banner() {


    useEffect(() => {

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
                            The best reserve currencey protocol. Launching with<br />
                            the greatest APY on Binance Smart Chain
                        </div>
                    </div>
                    <div className='right-part image'>
                        <img src='Images/Home/Banner/Image.png' />
                    </div>
                </div>
                <div className='section'>
                    <div className='left-part'>
                        <a href="https://Docs.flokidao.io" target="_blank">
                            <Button size="lg" className='active' pl={10} pr={10} rightIcon={<GiBookCover />}>Docs</Button>
                        </a>
                    </div>
                    <div className='right-part info-card'>
                        <BannerInfoCard title="Annual Percentage Yield" value="-" />
                        <BannerInfoCard title="Treasury Balance" value="-" />
                        <BannerInfoCard title="Market Capitalization" value="-" />
                        <BannerInfoCard title="Total Value Locked" value="-" />
                    </div>
                </div>
            </div>
        </S.Container>
    )
}