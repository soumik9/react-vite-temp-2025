import { logout } from "../auth";
import { config } from "@src/libs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: config.baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = getState().auth.accessToken;
        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);
        const response = result.error?.data;

        // Check for specific error messages indicating an invalid token
        if (
            response?.message === "Invalid token" ||
            response?.message === "Unauthorized" || result.error?.status === 401 ||
            response?.message === "Unauthorized access" ||
            response?.message === "Forbidden" || result.error?.status === 403
        ) {
            // Dispatch the logout action if the token is invalid
            api.dispatch(logout());
        }

        return result;
    },
    endpoints: (builder) => ({}),
});