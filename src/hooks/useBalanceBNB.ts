
import { useEffect, useState } from 'react';
import { useTypedSelector } from 'hooks/useTypeSelector'
import Web3 from 'web3';

// flavors
const useBalanceBNB = () => {
  const { wallet } = useTypedSelector((state) => state.wallet);
  const web3 = new Web3(Web3.givenProvider || "http://localhost:4000");
  const [state, setState] = useState(0)

  useEffect(() => {
    const fetchBalanceBNB = async (wallet:any) => {
      const bnbBalance = await web3.eth.getBalance(wallet)
      setState(Number(bnbBalance))
    }
    if(wallet!=""){
        fetchBalanceBNB(wallet)
    }
    
  }, [wallet])
  return state
}

export default useBalanceBNB





