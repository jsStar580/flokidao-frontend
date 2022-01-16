import { Networks } from "./blockchain";

const BSC_TEST = {
    FLOK_ADDRESS: "0xF066E6Ddf0Ae8Be8cb2D3bC74eE6fbbEd5ed6Aa9",
    PRESALE_ADDRESS: "0xF64414f82DfA77ecAe41CB01B800C00c304a314c",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.BSC_TEST) return BSC_TEST;

    throw Error("Network don't support");
};
