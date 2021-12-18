import Web3 from 'web3'
const web3NoAccount = new Web3(Web3.givenProvider || "http://localhost:4000");

const getWeb3NoAccount = () => {
  return web3NoAccount
}

export { getWeb3NoAccount }
export default web3NoAccount
