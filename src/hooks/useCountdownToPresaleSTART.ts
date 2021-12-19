
import { useState, useEffect } from 'react';

export const useCountdownToPresaleSTART = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setCountdownToPresaleSTART] = useState([]);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getTimes().call()
      setCountdownToPresaleSTART(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const presaleSTART =  state[4]
  return presaleSTART
}
