
import { Action, ActionType } from "../actionTypes/index";
const initialState = {
    wallet: ""
};

interface State {
    wallet: string,
}

export const walletReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.CONNECTED_WALLET:
            return {
                wallet: action.payload
            }
        case ActionType.DISCONNECTED_WALLET:
             return {
                 wallet: action.payload
             }
        case ActionType.CHANGED_WALLET:
            return {
                wallet: action.payload
            }
        default:
            return state;
    }
}

