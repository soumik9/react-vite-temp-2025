import { apiSlice } from "../api/apiSlice";
import { ENUM_TAG_TYPES } from "../api/tagTypes";

// ?the main api url
const URL = 'dashboard'

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *get dashboard stats 
        getDashboardStats: builder.query({
            query: (month) => `${URL}/${month}`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.DASHBOARD],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),
    })
});

export const {
    useGetDashboardStatsQuery,
} = orderApi;