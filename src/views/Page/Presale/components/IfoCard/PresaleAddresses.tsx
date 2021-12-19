import React, { useEffect, useState } from 'react'
import { usePublicPresaleFLOKIContract } from 'hooks/useContract';
import { Button } from '@chakra-ui/react';
import { FaRegShareSquare } from 'react-icons/fa';
import { useTypedSelector } from 'hooks/useTypeSelector';

export const ZERO = '0x0000000000000000000000000000000000000000'

const PresaleAddresses = () => {

    const publicPresaleContract = usePublicPresaleFLOKIContract()
    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
    const { wallet } = useTypedSelector((state) => state.wallet);
    const [refreshDelay, setRefreshDelay] = useState(1000)
    const [addresses, setState] = useState([]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const _state = await publicPresaleContract.methods.getAddresses().call()
            setState(_state)
            setRefreshDelay(6000)
        }, refreshDelay)
        return () => clearInterval(interval)
    }, [refreshDelay, wallet])

    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
    const presaleFLOKI = addresses[0]
    const floki = addresses[1]
    const creamery = addresses[2]
    const iceCreamMan = addresses[3]
    const pendingICM = addresses[4]

    return (

        <>
            <div className="unit-row" style={{ marginTop: '10px' }}>
                <div className="title"><span>Presale:</span></div>

                <Button variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>
                    {presaleFLOKI == ZERO ? 'TBA' :
                        <a target="_blank" href={`https://testnet.bscscan.com/address/${presaleFLOKI}`} style={{ margin: 'auto' }}>
                            {presaleFLOKI}
                        </a>
                    }</Button>
            </div>
            {wallet == iceCreamMan ? <>
                <div className="unit-row" style={{ marginTop: '10px' }}>
                    <div className="title"><span>Token:</span></div>
                    <Button variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>
                        <a target="_blank" href={`https://testnet.bscscan.com/address/${floki}`} style={{ margin: 'auto' }}>
                            {floki}
                        </a>
                    </Button>
                </div>
            </> :
                <div className="unit-row" style={{ marginTop: '10px' }}>
                    <div className="title"><span>Token:</span></div>
                    <Button variant="link" color="#fff" className="presale-link" rightIcon={floki == ZERO ? <></> : <FaRegShareSquare />}>
                        {floki == ZERO ? 'TBA' :
                            <a target="_blank" href={`https://testnet.bscscan.com/address/${floki}`} style={{ margin: 'auto' }}>
                                {floki}
                            </a>
                        }</Button>
                </div>
            }
            {
                wallet == iceCreamMan ? <>
                    <div className="unit-row" style={{ marginTop: '10px' }}>
                        <div className="title"><span>Creamery:</span></div>
                        <Button variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>
                            <a target="_blank" href={`https://testnet.bscscan.com/address/${creamery}`} style={{ margin: 'auto' }}>
                                {creamery}
                            </a>
                        </Button>
                    </div>
                    <div className="unit-row" style={{ marginTop: '10px' }}>
                        <div className="title"><span>Ice Cream Man:</span></div>

                        <Button variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>
                            <a target="_blank" href={`https://testnet.bscscan.com/address/${iceCreamMan}`} style={{ margin: 'auto' }}>
                                {iceCreamMan}
                            </a>
                        </Button>
                    </div>
                    <div className="unit-row" style={{ marginTop: '10px' }}>
                        <div className="title"><span>Pending Ice Cream Man:</span></div>

                        <Button variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>
                            <a target="_blank" href={`https://testnet.bscscan.com/address/${pendingICM}`} style={{ margin: 'auto' }}>
                                {pendingICM}
                            </a>
                        </Button>
                    </div>
                </> : ''
            }

        </>

    )
}

export default PresaleAddresses
