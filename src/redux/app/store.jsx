import { apiSlice } from "./api.slice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../auth";
import { globalReducer } from "../global";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        global: globalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false, // Disables serializable check for redux-persist(if used) actions
        }).concat(apiSlice.middleware),
});