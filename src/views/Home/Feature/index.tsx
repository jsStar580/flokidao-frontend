import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium, FaArrowRight } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';
import TokenCard from './Cards/TokenCard';
import TreasuryCard from './Cards/TreasuryCard';
import BondCard from './Cards/BondCard';

export default function Feature() {


    useEffect(()=>{

    })

    return (
        <S.Container>
             <div className="Feature">
                <div className='feature-intro'>
                    <div className='title'>
                        A decentralized reserve currency
                    </div>
                    <div className='body'>
                        <div className='description'>
                            Floki Dao seeks to not only follow the likes of first gen protocols
                            but also build a fund that will activley contribute into up coming projects that 
                            will further add value to the DAO these projects will be vetted by admins and put through the dao for approval. 
                            This is a new form of adding value to a already profitable protocol.
                        </div>
                        <a href='https://flokidao.medium.com' target="_blank"><Button mt={5} rightIcon={<FaArrowRight />} >See All Features</Button></a>
                    </div>
                </div>
                <div className='feature-card'>
                    <TokenCard />
                    <TreasuryCard />
                    <BondCard />
                </div>
            </div>
        </S.Container>
    )
}