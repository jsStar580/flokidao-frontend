import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const connectWallet = (wallet: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CONNECTED_WALLET,
            payload:wallet
        });
    }
} 