import React, { useEffect, useState } from 'react'
import { usePublicPresaleFLOKIContract } from 'hooks/useContract'
import AnimatedNumbers from './AnimatedNumbers';

const PresaleLimits = () => {
    const presaleContract = usePublicPresaleFLOKIContract()
    const [refreshDelay, setRefreshDelay] = useState(1000)
    const [limits, setLimits] = useState([]);
    useEffect(() => {

        const interval = setInterval(async () => {
            try {
                const _state = await presaleContract.methods.getLimits().call()
                setLimits(_state);
                setRefreshDelay(6000)
            } catch (error) { console.log(error) }
        }, refreshDelay)
        return () => clearInterval(interval)

    }, [refreshDelay])

    const softCap = limits[0]
    const softCapHit = limits[1]
    const hardCap = limits[2]
    const hardCapHit = limits[3]
    const minHolderContribution = limits[4]
    const maxHolderContribution = limits[5]

    return (
        <>
            {
                typeof (softCap) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Soft Cap:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={0} value={softCap / 1e18} suffix=' BNB' />
                    </span></div>
                </div>
            }
            {typeof (softCapHit) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Soft Cap Hit:</span></div>
                {softCapHit
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }</div>
            }
            {
                typeof (hardCap) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Hard Cap:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={0} value={hardCap / 1e18} suffix=' BNB' />
                    </span></div>
                </div>
            }
            {typeof (hardCapHit) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Hard Cap Hit:</span></div>
                {hardCapHit
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }</div>
            }
            {
                typeof (minHolderContribution) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>MIN Contribution:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={3} value={minHolderContribution / 1e18} suffix={' BNB'} />
                    </span></div>
                </div>
            }
            {
                typeof (maxHolderContribution) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>MAX Contribution:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={3} value={maxHolderContribution / 1e18} suffix={' BNB'} />
                    </span></div>
                </div>
            }
        </>
    )
}

export default PresaleLimits;