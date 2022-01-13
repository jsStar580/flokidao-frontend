import Web3 from "web3"
import {AbiItem} from "web3-utils"
import web3NoAccount from "./web3"

import {
    newDaoContractAddress,
    presaleContractAddress
} from "config/contracts"

import newDaoContract_ABI from 'config/abi/FLOK.json';
import persaleFLOKI_ABI from 'config/abi/Presale.json';


const getContract = (abi: any, address: string, web3?: Web3) => {
    const _web3 = web3 ?? web3NoAccount
    return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
  }

export const getPublicFLOKIContract = (web3?: Web3) => {
  return getContract(newDaoContract_ABI, newDaoContractAddress, web3)  
}

export const getPublicPresaleFLOKIContract =(web3?:Web3) => {
    return getContract(persaleFLOKI_ABI, presaleContractAddress, web3);
}