import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

const initialState = {
    isDark: false,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            state.isDark = action.payload;
            Cookies.set('isDark', action.payload);
        },
    }
})

export const {
    toggleDarkMode,
} = globalSlice.actions;

export default globalSlice.reducer;