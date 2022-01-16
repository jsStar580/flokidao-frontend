import { Networks } from "../constants/blockchain";

const switchRequest = () => {
    return (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }],
    });
};

const addChainRequest = () => {
    return (window as any).ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
            {
                chainId: "0x61",
                chainName: "Binance Smart Chain Test",
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                blockExplorerUrls: ["https://testnet.bscscan.com/"],
                nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                },
            },
        ],
    });
};

export const swithNetwork = async () => {
    if (window.ethereum) {
        try {
            await switchRequest();
        } catch (error: any) {
            if (error.code === 4902) {
                try {
                    await addChainRequest();
                    await switchRequest();
                } catch (addError) {
                    console.log(error);
                }
            }
            console.log(error);
        }
    }
};
