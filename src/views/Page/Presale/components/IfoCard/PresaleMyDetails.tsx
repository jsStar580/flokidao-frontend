import React, { useEffect, useState } from 'react'
import { usePublicPresaleFLOKIContract } from 'hooks/useContract';
import AnimatedNumbers from './AnimatedNumbers';
import { useRefundsEnabled } from 'hooks/useRefundsEnabled';
import { ZERO } from './PresaleAddresses';
import { Button } from '@chakra-ui/react';
import { FaRegShareSquare } from 'react-icons/fa';
import { useWeb3Context } from 'hooks';


const PresaleMyDetails = () => {

    const publicPresaleContract = usePublicPresaleFLOKIContract()
    const refundsEnabled = useRefundsEnabled(publicPresaleContract)
    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
    const { address } = useWeb3Context();
    const [refreshDelay, setRefreshDelay] = useState(1000)
    const [state, setState] = useState([]);
    useEffect(() => {
        const interval = setInterval(async () => {
            const _state = await publicPresaleContract.methods.getHolderInfo((typeof (address) != "undefined" && address != "") ? address : ZERO).call()
            setState(_state)
            setRefreshDelay(6000)
        }, refreshDelay)
        return () => clearInterval(interval)
    }, [refreshDelay, address])
    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS

    const remainingBNBcontribution = state[0]
    const holdersClaimableFLV = state[1]
    const holderContributions = state[2]
    const claimedFLV = state[3]
    const completedContributions = state[4]
    const completedClaims = state[5]
    const claimedRefund = state[6]
    return (
        <>
            {
                typeof (holderContributions) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Contributions:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={2} value={holderContributions / 1e18} suffix=' BNB' />
                    </span></div>
                </div>
            }
            {
                typeof (remainingBNBcontribution) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Remaining MAX Contribution:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={2} value={remainingBNBcontribution / 1e18} suffix=' BNB' />
                    </span></div>
                </div>
            }
            {
                typeof (holdersClaimableFLV) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Purchased:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={0} value={holdersClaimableFLV / 1e9} suffix={' FLOK'} />
                    </span></div>
                </div>
            }
            {
                typeof (claimedFLV) == "undefined" ? '' : <div className="unit-row">
                    <div className="title"><span>Claimed:</span></div>
                    <div className="value"><span>
                        <AnimatedNumbers decimals={0} value={claimedFLV / 1e9} suffix={' FLOK'} />
                    </span></div>
                </div>
            }
            {typeof (completedContributions) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Maxed Out Contributions:</span></div>
                {completedContributions
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }</div>
            }
            {typeof (completedClaims) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Maxed Out Claims:</span></div>
                {completedClaims
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }</div>
            }
            {refundsEnabled ? <>
                {
                    typeof (claimedRefund) == "undefined" ? '' : <div className="unit-row">
                        <div className="title"><span>Refund Claimed:</span></div>
                        <div className="value"><span>
                            <AnimatedNumbers decimals={2} value={claimedRefund} suffix={' BNB'} />
                        </span></div>
                    </div>
                }</> : ''
            }
            <a target="_blank" href={`https://testnet.bscscan.com/address/${address}`} style={{ margin: 'auto' }}>
                <Button mt={5} variant="link" color="#fff" className="presale-link" rightIcon={<FaRegShareSquare />}>
                    View My Wallet on BSCScan.com
                </Button>
            </a>

        </>
    )
}

export default PresaleMyDetails
