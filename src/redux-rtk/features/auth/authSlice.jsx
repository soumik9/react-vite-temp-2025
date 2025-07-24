import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

const initialState = {
    accessToken: "",
    user: {},
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        profileLog: (state, action) => {
            state.user = action.payload;
        },
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
            state.isAuthenticated = undefined;

            Cookies.remove('accessToken');
            Cookies.remove('user');
        }
    }
})

export const { userLoggedIn, userLoggedOut, profileLog } = authSlice.actions;
export default authSlice.reducer;