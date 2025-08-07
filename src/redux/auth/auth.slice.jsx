import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageKeyEnum } from "@src/libs/enum";
import { removeLocalStorage, setLocalStorage } from "@src/libs/helper";

const initialState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        setCredential: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = { ...state.user, ...user };
            state.accessToken = accessToken;
            state.isAuthenticated = accessToken ? true : false; //makes it true if token exists
        },

        setUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
            setLocalStorage(LocalStorageKeyEnum.Auth, state.user);
        },

        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            removeLocalStorage(LocalStorageKeyEnum.Auth)
        },
    },
});

export const {
    setCredential,
    setUser,
    logout
} = authSlice.actions;

export const authReducer = authSlice.reducer;