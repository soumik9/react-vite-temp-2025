import { apiSlice } from "./api.slice";
import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "../auth";
import { globalSliceReducer } from "../global";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        global: globalSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false, // Disables serializable check for redux-persist(if used) actions
        }).concat(apiSlice.middleware),
});