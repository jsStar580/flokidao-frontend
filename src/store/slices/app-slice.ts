import { ethers } from "ethers";
import { getAddresses } from "../../constants";
import { FlokTokenContract, PresaleContract } from "../../abi";
import { setAll, getMarketPrice, getTokenPrice } from "../../helpers";
import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonRpcProvider } from "@ethersproject/providers";
import { RootState } from "../store";

interface ILoadAppDetails {
    networkID: number;
    provider: JsonRpcProvider;
}

export const loadAppDetails = createAsyncThunk(
    "app/loadAppDetails",
    //@ts-ignore
    async ({ networkID, provider }: ILoadAppDetails) => {
        const daiPrice = getTokenPrice("DAI");
        const addresses = getAddresses(networkID);

        const flokPrice = getTokenPrice("FLOK");
        const flokAmount = 1512.12854088 * flokPrice;

        
        const currentBlock = await provider.getBlockNumber();
        const currentBlockTime = (await provider.getBlock(currentBlock)).timestamp;
        const flokContract = new ethers.Contract(addresses.FLOK_ADDRESS, FlokTokenContract, provider);
        const presaleContract = new ethers.Contract(addresses.PRESALE_ADDRESS, PresaleContract, provider);

        const marketPrice = ((await getMarketPrice(networkID, provider)) / Math.pow(10, 9)) * daiPrice;

        const totalSupply = (await flokContract.totalSupply()) / Math.pow(10, 9);
        // const circSupply = (await sflokContract.circulatingSupply()) / Math.pow(10, 9);

        // const stakingTVL = circSupply * marketPrice;
        const marketCap = totalSupply * marketPrice;

        return {
            totalSupply,
            marketCap,
            currentBlock,
            marketPrice,
            currentBlockTime,
        };
    },
);

const initialState = {
    loading: true,
};

export interface IAppSlice {
    loading: boolean;
    marketPrice: number;
    marketCap: number;
    currentBlock: number;
    currentBlockTime: number;
    networkID: number;
    totalSupply: number;

}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        fetchAppSuccess(state, action) {
            setAll(state, action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadAppDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loadAppDetails.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(loadAppDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            });
    },
});

const baseInfo = (state: RootState) => state.app;

export default appSlice.reducer;

export const { fetchAppSuccess } = appSlice.actions;

export const getAppState = createSelector(baseInfo, app => app);
