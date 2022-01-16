import { useMemo } from 'react'
import { getAddresses } from "../constants";
import { FlokTokenContract, PresaleContract } from "../abi";

import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const web3 = new Web3(Web3.givenProvider || "http://localhost:4000");
const addresses = getAddresses(97);

export const usePublicPresaleFLOKIContract = () => {
    return new web3.eth.Contract((PresaleContract as unknown) as AbiItem, addresses.PRESALE_ADDRESS);  
}

export const useFLOKIContract = () => {
    

}
