import { useEffect, useState } from "react";
import Web3 from "web3";

const useAccount = () => {
    const [account, setAccount] = useState("");
    useEffect(() => {
        const checkConnection = async () => {

            // Check if browser is running Metamask
            let web3: any;
            if (window.ethereum) {
                web3 = new Web3((window as any).ethereum);
            } else if ((window as any).web3) {
                web3 = new Web3((window as any).web3.currentProvider);
            };

            // Check if User is already connected by retrieving the accounts
            web3.eth.getAccounts()
                .then(async (addr: string) => {
                    setAccount(addr[0]);
                });
        };
        if(localStorage.getItem('disconnected')!='true'){
            checkConnection();
        }
    }, []);

    return { account }
}
export default useAccount