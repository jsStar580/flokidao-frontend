
import { useState, useEffect } from 'react';


export const useHardCap = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setState] = useState([]);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getLimits().call()
      setState(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const hardCap  = state[2]
  return hardCap
}


export const useSoftCap = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setState] = useState([]);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getLimits().call()
      setState(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const softCap  = state[0]
  return softCap
}



export const useMinContribution = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setState] = useState([]);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getLimits().call()
      setState(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const minHolderContribution = state[4]
  return minHolderContribution
}

  
  

export const useMaxContribution = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setState] = useState([]);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getLimits().call()
      setState(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const maxHolderContribution = state[5]
  return maxHolderContribution
}
