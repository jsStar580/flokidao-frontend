import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import { useEffect } from 'react';

export default function TreasuryCard(props:any) {


    useEffect(()=>{

    })

    return (
            <div className="FeatureCard TreasuryCard">
                <img className='icon' src='Images/Home/Features/Icon1.png' />
                <span className='title'>Floki Dao<br />Treasury</span>
                <span className='description'>Treasury is used to increase Floki Daos balance and back outstanding FLOK tokens</span>
            </div>
    )
}