import React, { useEffect, useState } from 'react'
import { usePublicPresaleFLOKIContract } from 'hooks/useContract';
import AnimatedNumbers from './AnimatedNumbers';
import { useIceCreamMan } from 'hooks/useIceCreamMan';
import { convertTimestamp } from 'helpers/flokiHelpers';
import { useWeb3Context } from 'hooks';


const PresaleTimes = () => {

    const publicPresaleContract = usePublicPresaleFLOKIContract()
    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
    const {address} = useWeb3Context();
    const [refreshDelay, setRefreshDelay] = useState(1000)
    const [times, setState] = useState([]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const _state = await publicPresaleContract.methods.getTimes().call()
            setState(_state)
            setRefreshDelay(6000)
        }, refreshDelay)
        return () => clearInterval(interval)
    }, [refreshDelay, address])

    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
    const iceCreamMan = useIceCreamMan(publicPresaleContract)

    const presaleDuration_Seconds: number = times[0]
    const startTimeString: string = times[1]
    const presaleTimestampSTART: number = times[2]
    const presaleTimestampEND: number = times[3]
    const countdownToPresaleSTART: number = times[4]
    const countdownToPresaleEND: number = times[5]

    return (
        <>
            {typeof (countdownToPresaleSTART) == "undefined" || countdownToPresaleSTART <= 0 ? '' : <div className="unit-row">
                <div className="title"><span>Starts In: </span></div>
                <div className='value'>
                <AnimatedNumbers decimals={0} value={Math.floor((countdownToPresaleSTART) / 60 / 60)} suffix={' Hours'} />{'\u00A0'}
                <AnimatedNumbers decimals={0} value={Math.floor((((countdownToPresaleSTART) / 60 / 60) - (Math.floor((countdownToPresaleSTART) / 60 / 60))) * 60)} suffix={' Minutes'} />
                </div>
            </div>
            }
            {address == iceCreamMan ? <>
                {typeof (countdownToPresaleEND) == "undefined" || countdownToPresaleEND <= 0 ? '' : <div className="unit-row">
                    <div className="title"><span>Ends In: </span></div>
                    <div className='value'>
                    <AnimatedNumbers decimals={0} value={Math.floor((countdownToPresaleEND) / 60 / 60)} suffix={' Hours'} />{'\u00A0'}
                    <AnimatedNumbers decimals={0} value={Math.floor((((countdownToPresaleEND) / 60 / 60) - (Math.floor((countdownToPresaleEND) / 60 / 60))) * 60)} suffix={' Minutes'} />
                    </div>
                </div>
                }
            </> : ''}
            {typeof (presaleDuration_Seconds) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Whitelist Only: </span></div>
                <div className='value'><AnimatedNumbers decimals={0} value={presaleDuration_Seconds/60} suffix={' Minutes'} /></div>
            </div>
            }
            {typeof (presaleTimestampSTART) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Start Time: </span></div>
                <div className='value'>{convertTimestamp(presaleTimestampSTART)}</div>
            </div>
            }
            {typeof (presaleTimestampEND) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Whitelist Only End Time:</span></div>
                <div className='value'>{convertTimestamp(presaleTimestampEND)}</div>
            </div>
            }
            
        </>
    )
}

export default PresaleTimes
