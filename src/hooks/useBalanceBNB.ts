
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useWeb3Context } from './web3';

// flavors
const useBalanceBNB = () => {
  const {address} = useWeb3Context();
  const web3 = new Web3(Web3.givenProvider || "http://localhost:4000");
  const [state, setState] = useState(0)

  useEffect(() => {
    const fetchBalanceBNB = async (wallet:any) => {
      const bnbBalance = await web3.eth.getBalance(wallet)
      setState(Number(bnbBalance))
    }
    if(address!=""){
        fetchBalanceBNB(address)
    }
    
  }, [address])
  return state
}

export default useBalanceBNB





