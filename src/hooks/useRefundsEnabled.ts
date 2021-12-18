
import { useState, useEffect } from 'react';

export const useRefundsEnabled = (contract: any) => {
    // GETS DATA AFTER 1 SECOND DELAY
    const [state, setState] = useState([]);
    useEffect(() => {
        const interval = setTimeout(async () => {
            const _state = await contract.methods.getRules().call()
            setState(_state)
        }, 1000)
        return () => clearInterval(interval)
    }, [contract])
    // GETS DATA AFTER 1 SECOND DELAY
    const refundsEnabled = state[6]
    return refundsEnabled
}