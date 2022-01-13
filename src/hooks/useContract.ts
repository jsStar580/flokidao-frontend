import { useMemo } from 'react'

import { newDaoContractAddress, presaleContractAddress } from 'config/contracts'
import presale_ABI from 'config/abi/Presale.json';
import token_ABI from 'config/abi/FLOK.json';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const web3 = new Web3(Web3.givenProvider || "http://localhost:4000");

export const usePublicPresaleFLOKIContract = () => {
    return new web3.eth.Contract((presale_ABI as unknown) as AbiItem, presaleContractAddress);  
}

export const useFLOKIContract = () => {
    

}
