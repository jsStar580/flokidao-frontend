import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./slices/account-slice";
import appReducer from "./slices/app-slice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        app: appReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
