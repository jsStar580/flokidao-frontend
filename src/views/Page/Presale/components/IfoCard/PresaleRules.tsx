import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePublicPresaleFLOKIContract } from 'hooks/useContract';
import { Fonts } from 'style/FlokiStyle';
import { useIceCreamMan } from 'hooks/useIceCreamMan';
import { useTypedSelector } from 'hooks/useTypeSelector';


const PresaleRules = () => {

    const publicPresaleContract = usePublicPresaleFLOKIContract()
    const iceCreamMan = useIceCreamMan(publicPresaleContract)

    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
    const { wallet } = useTypedSelector((state) => state.wallet);
    const [refreshDelay, setRefreshDelay] = useState(1000)
    const [rules, setState] = useState([]);
    useEffect(() => {
        const interval = setInterval(async () => {
            const _rules = await publicPresaleContract.methods.getRules().call()
            setState(_rules)
            setRefreshDelay(6000)
        }, refreshDelay)
        return () => clearInterval(interval)
    }, [refreshDelay, wallet])
    // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS

    const claimsEnabled = rules[0]
    const enforceWhitelist = rules[1]
    const useTokensInContract = rules[2]
    const timedPresaleEnabled = rules[3]
    const contributionsEnabled = rules[4]
    const cappedPresaleEnabled = rules[5]
    const softCapMissedRefundEnabled = rules[6]
    const overridesAllowed_timedPresale = rules[7]
    const overridesAllowed_cappedPresale = rules[8]
    const shouldCheckContributionsEnabled = rules[9]

    return (
        <>
            {typeof (contributionsEnabled) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Contributions Enabled:</span></div>
                {contributionsEnabled
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            {typeof (claimsEnabled) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Claims Enabled:</span></div>
                {claimsEnabled
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            {typeof (enforceWhitelist) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>CWhitelist Enforced:</span></div>
                {enforceWhitelist
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            {typeof (timedPresaleEnabled) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Time Window Enforced:</span></div>
                {timedPresaleEnabled
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            {typeof (cappedPresaleEnabled) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Cap Enforced:</span></div>
                {cappedPresaleEnabled
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            {softCapMissedRefundEnabled?<>
            {typeof (softCapMissedRefundEnabled) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Soft Cap missed Refunds Enabled:</span></div>
                {softCapMissedRefundEnabled
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            </>:''}
            {typeof (overridesAllowed_timedPresale) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Timed Presale Overrides Allowed:</span></div>
                {overridesAllowed_timedPresale
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            {typeof (overridesAllowed_cappedPresale) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Capped Presale Overrides Allowed:</span></div>
                {overridesAllowed_cappedPresale
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            {wallet == iceCreamMan? <>
            {typeof (shouldCheckContributionsEnabled) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Contributions Enabled Enforced:</span></div>
                {shouldCheckContributionsEnabled
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            </>:''}
            {wallet == iceCreamMan? <>
            {typeof (useTokensInContract) == "undefined" ? '' : <div className="unit-row">
                <div className="title"><span>Use Tokens in Contract:</span></div>
                {useTokensInContract
                    ? <div className="value"><span>✔️</span></div>
                    : <div className="value"><span>❌</span></div>
                }
            </div>
            }
            </>:''}
        </>
    )
}

export default PresaleRules
