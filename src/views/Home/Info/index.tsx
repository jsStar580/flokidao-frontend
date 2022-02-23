import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

import * as S from './styles';
import { useEffect } from 'react';
import DashboardCard from 'components/DashboardCard';
import DaoInfoCard from './DaoInfoCard';

export default function Info() {


    useEffect(()=>{

    })

    const daoInfoList:any[]=[
        {
            cat:"Name",
            title:  "Floki Dao",
            description: `Floki DAO is a next generation reserve currency protocol. 
                          The DAO uses its protocol controlled value to reward token holders with high yields, 
                          while using its treasury reserves to invest in and grow projects`           
        },
        {
            cat:"Symbol",
            title:  "$FLOK",
            description: `$FLOK is the native governance and token of Floki DAO.. 
                          The token will have voting and power of major protocol decisions and treasury managment.`           
        },
        {
            cat:"circulating supply",
            title:  "10,000,000",
            description: `At launch Floki DAO will have a diluted supply of 10,000,000 $FLOK`           
        },
        {
            cat:"Chain",
            title:  "Binance Smart Chain",
            description: `$FLOK will launch nativley on BSC (Binance smart chain and will be available to swap on PancakeSwap.`           
        }
    ]
    return (
        <S.Container>
            <div className="Info">
                {
                    daoInfoList.map((d:any,i:number)=>{
                        return <DaoInfoCard key={i} cat={d.cat} title={d.title} description={d.description} />
                    })
                }                
            </div>
        </S.Container>
    )
}