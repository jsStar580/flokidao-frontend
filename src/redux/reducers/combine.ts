import { combineReducers } from 'redux';
import { walletReducer } from './index';
const reducers = combineReducers({
    wallet: walletReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;