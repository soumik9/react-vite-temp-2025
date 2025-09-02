import Cookies from 'js-cookie';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePath: "",
    subActivePath: "",
    isSidebarItemDropdownOpen: "",

    isDark: false, // toggle dark mode
    isProfileDropdownOpen: false, // toggler header profile dropdown
    isSidebarOpen: true, // toggle sidebar menu
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
        setSidebarItemDropdown: (state, action) => {
            state.isSidebarItemDropdownOpen = state.isSidebarItemDropdownOpen === action.payload ? '' : action.payload;
        },

        // set active global sidebar
        setActiveGlobalSidebar: (state, action) => {
            state.activePath = action.payload.activePath;
            state.subActivePath = action.payload.subActivePath;
            state.isSidebarItemDropdownOpen = action.payload.isSidebarItemDropdownOpen;
        },

        // toggle dark mode
        toggleDarkMode: (state, action) => {
            state.isDark = action.payload;
            Cookies.set('isDark', action.payload);
        },

        // toggler header profile dropdown
        toggleProfileDropdown: (state, action) => {
            state.isProfileDropdownOpen = action.payload;
        },

        // to toggle sidebar menu
        toggleSidebarMenu: (state, action) => {
            state.isSidebarOpen = action.payload;
        }
    }
});

export const {
    setActivePath,
    setSubActivePath,
    setDropdown,
    setActiveGlobalSidebar,
    toggleDarkMode,
    toggleProfileDropdown,
    toggleSidebarMenu,
} = globalSlice.actions;

export const globalSliceReducer = globalSlice.reducer;