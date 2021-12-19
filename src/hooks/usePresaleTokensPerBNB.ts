

import { useState, useEffect } from 'react';

export const useFLOKIPerNativeCoin = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setState] = useState([]);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getInfo().call()
      setState(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const flokiPerNativeCoin =  state[5]
  return flokiPerNativeCoin
}


