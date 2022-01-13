import { useEffect, useState } from "react";

export const useClaimableFLOK  = (contract: any, wallet:any) => {
    // GETS DATA AFTER 1 SECOND DELAY
    const [state, setState] = useState([]);
    useEffect(() => {
      const interval = setTimeout(async () => {
        const _state = await contract.methods.getHolderInfo(wallet).call()
        setState(_state)
        //console.log(_state)
      }, 1000)
      return () => clearInterval(interval)
    }, [contract])
    // GETS DATA AFTER 1 SECOND DELAY
    const claimableFLOK =  state[1]
    return claimableFLOK
  }