import React from 'react'
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { ModalProvider } from '@pancakeswap-libs/uikit'
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { Provider } from 'react-redux';
import {store} from './redux/store'

const Providers: React.FC = ({ children }) => {
    function getLibrary(provider: any): Web3 {
        const library = new Web3(provider)
        return library
      }
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Provider store={store}>
                <ThemeContextProvider>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </ThemeContextProvider>
            </Provider>
        </Web3ReactProvider>
    )
}

export default Providers
