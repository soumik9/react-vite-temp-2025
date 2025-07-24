import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENUM_TAG_TYPES } from "./tagTypes";
import { userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = getState()?.auth?.accessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);
        const response = result.error?.data;
        if (response?.message === "Invalid token" || response?.message === "Unauthorized" || response?.message === "Unauthorized access" || response?.message === "Forbidden") {
            api.dispatch(userLoggedOut());
        }
        return result;
    },
    tagTypes: [
        ...Object.values(ENUM_TAG_TYPES)
    ],
    endpoints: (builder) => ({}),
});