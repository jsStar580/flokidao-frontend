export enum ActionType {
    CONNECTED_WALLET = 'CONNECTED_WALLET',
    DISCONNECTED_WALLET = 'DISCONNECTED_WALLET',
    CHANGED_WALLET = 'CHANGED_WALLET'
}

interface actionConnected {
    type: ActionType.CONNECTED_WALLET;
    payload:string
}

interface actionDisconnected {
    type: ActionType.DISCONNECTED_WALLET;
    payload:string
}

interface actionChanged {
    type: ActionType.CHANGED_WALLET;
    payload: string ;
}

export type Action = actionConnected | actionDisconnected | actionChanged;