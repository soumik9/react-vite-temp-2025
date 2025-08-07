import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePath: "",
    subActivePath: "",
    mobileMenuOpen: false,
    isDropdownOpen: "",
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {

        // set active path
        setActivePath: (state, action) => {
            state.activePath = action.payload;
        },

        // set sub active path
        setSubActivePath: (state, action) => {
            state.subActivePath = action.payload;
        },

        // set tools dropdown
        setDropdown: (state, action) => {
            state.isDropdownOpen = state.isDropdownOpen === action.payload ? '' : action.payload;
        },

        // set active global sidebar
        setActiveGlobalSidebar: (state, action) => {
            state.activePath = action.payload.activePath;
            state.subActivePath = action.payload.subActivePath;
            state.isDropdownOpen = action.payload.isDropdownOpen;
        },

        // set mobile menu open
        setMobileMenuOpen: (state, action) => {
            state.mobileMenuOpen = action.payload;
        }
    }
});

export const {
    setActivePath,
    setSubActivePath,
    setDropdown,
    setActiveGlobalSidebar,
    setMobileMenuOpen,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;