import { useState, useEffect } from 'react';

export const useIceCreamMan = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setState] = useState([]);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getAddresses().call()
      setState(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const iceCreamMan =  state[3]
  return iceCreamMan
}
