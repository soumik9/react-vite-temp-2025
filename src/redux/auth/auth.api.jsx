import { setUser } from ".";
import { apiSlice } from "../app";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // LOGIN
        login: builder.mutation({
            query: (data) => {

                const formData = new FormData();
                formData.append("data", JSON.stringify(data));

                return {
                    url: "auth/signin",
                    method: "POST",
                    body: formData
                };
            },
        }),

        // GET PROFILE
        getProfile: builder.query({
            query: () => {
                return {
                    url: "auth/profile",
                    method: "GET"
                };
            },
            async onQueryStarted(_args, { queryFulfilled, dispatch }) {
                try {
                    const { data: apiData } = await queryFulfilled;
                    dispatch(setUser(apiData?.data));
                } catch (err) {
                    return err;
                }
            },
            providesTags: ["UserProfile"],
        }),

    }),
});

export const {
    useLoginMutation,
    useGetProfileQuery
} = authApi;