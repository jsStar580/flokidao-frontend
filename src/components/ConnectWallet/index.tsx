import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3Context } from "hooks";
import { DEFAULD_NETWORK } from "../../constants";
import { Button } from "@chakra-ui/react";

function ConnectWallet() {

    const { connect, disconnect, connected, web3, providerChainID, checkWrongNetwork, address } = useWeb3Context();
    const dispatch = useDispatch();
    const [isConnected, setConnected] = useState(connected);

    let buttonText = "ConnectWallet";
    let clickFunc: any = connect;
    let buttonStyle = {};

    if (isConnected) {
        buttonText = String(address).substring(0, 6) +"..." +String(address).substring(38);
        clickFunc = disconnect;
    }

    if (isConnected && providerChainID !== DEFAULD_NETWORK) {
        buttonText = "Wrong Network";
        buttonStyle = { backgroundColor: "rgb(255, 67, 67)", color: "#ffffff" };
        clickFunc = () => {
            checkWrongNetwork();
        };
    }

    useEffect(() => {
        setConnected(connected);
    }, [web3, connected]);

    return (
        <Button size="md" className="headerAction" style={buttonStyle} onClick={clickFunc}>
            <p>{buttonText}</p>
        </Button>
    );
}

export default ConnectWallet;
