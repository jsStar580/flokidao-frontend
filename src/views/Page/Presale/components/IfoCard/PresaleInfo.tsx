import React, { useEffect, useState } from 'react'
import { usePublicPresaleFLOKIContract } from 'hooks/useContract'
import AnimatedNumbers from './AnimatedNumbers'
import { useCountdownToPresaleSTART } from 'hooks/useCountdownToPresaleSTART';
import { useIceCreamMan } from 'hooks/useIceCreamMan';
import { useTypedSelector } from 'hooks/useTypeSelector'
import { Progress } from '@chakra-ui/react';


const PresaleInfo = () => {
    const publicPresaleContract = usePublicPresaleFLOKIContract()
    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
    const { wallet } = useTypedSelector((state) => state.wallet);
    const [refreshDelay, setRefreshDelay] = useState(1000)
    const [info, setState] = useState([])

    useEffect(() => {
        const interval = setInterval(async () => {
            const _state = await publicPresaleContract.methods.getInfo().call()
            setState(_state)
            setRefreshDelay(6000)
        }, refreshDelay)
        return () => clearInterval(interval)
    }, [refreshDelay, wallet])
    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS

    const claimsEnabledOnBlockNumber = info[0]
    const globalTotal_maxContribution = info[1]
    const globalTotal_contributions = info[2]
    const globalTotal_claims = info[3]
    const globalTotal_refunds = info[4]
    const flokiPerNativeCoin = info[5]
    const contractNativeCoinBalance = info[6]

    const presaleSTART: number = useCountdownToPresaleSTART(publicPresaleContract)
    //   const durationToBlock = useBlockCountdown(claimsEnabledOnBlockNumber)
    //   const [days, hours, minutes] = getDurationFromTimestamp(durationToBlock)

    const iceCreamMan = useIceCreamMan(publicPresaleContract)

    const [progress, setProgress] = useState(0)

    const [hardCap, setHardCap] = useState(0)
    useEffect(() => {
        const interval = setInterval(async () => {
            const limits = await publicPresaleContract.methods.getLimits().call()
            setHardCap(limits[2])
            setRefreshDelay(6000)
            setProgress((globalTotal_contributions / hardCap) * 100 + 40)
        }, refreshDelay)
        return () => clearInterval(interval)
    }, [refreshDelay, globalTotal_contributions])

    return (
        <>
            {presaleSTART > 0 ? '' :
                <h1>Progress</h1>
            }

            {presaleSTART > 0 ? '' :
                <div style={{marginBottom:'10px'}}>
                    <Progress variant="round" value={progress} />
                </div>
            }
            {typeof (globalTotal_contributions) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Total Contributions:</span></div>
                <div className='value'>
                    <AnimatedNumbers decimals={0} value={globalTotal_contributions / 1e18} suffix={' BNB'} />
                </div>
            </div>
            }
            {typeof (globalTotal_maxContribution) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Hard Cap:</span></div>
                <div className='value'>
                    <AnimatedNumbers decimals={0} value={globalTotal_maxContribution / 1e18} suffix={' BNB'} />
                </div>
            </div>
            }
            {typeof (flokiPerNativeCoin) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>FORK per BNB:</span></div>
                <div className='value'>
                    <AnimatedNumbers decimals={0} value={flokiPerNativeCoin / 1e9} suffix={''} />
                </div>
            </div>
            }
            {wallet !== iceCreamMan ? '' : <>
                {typeof (globalTotal_claims) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Total FORK Claimed:</span></div>
                    <div className='value'>
                        <AnimatedNumbers decimals={0} value={globalTotal_claims / 1e9} suffix={' FORK'} />
                    </div>
                </div>
                }
                {typeof (globalTotal_refunds) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Total Refunds Claimed:</span></div>
                    <div className='value'>
                        <AnimatedNumbers decimals={0} value={globalTotal_refunds / 1e18} suffix={' BNB'} />
                    </div>
                </div>
                }
                {typeof (contractNativeCoinBalance) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Presale Contract BNB Balance:</span></div>
                    <div className='value'>
                        <AnimatedNumbers decimals={0} value={contractNativeCoinBalance / 1e18} suffix={' BNB'} />
                    </div>
                </div>
                }
            </>
            }
        </>
    )
}

export default PresaleInfo
