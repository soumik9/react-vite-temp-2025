import { apiSlice } from "../api/apiSlice";
import Cookies from 'js-cookie';
import { userLoggedIn } from "./authSlice";
import { errorNotify, successNotify } from "@src/libs/hooks";

const URL = 'auth/admin/'

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${URL}signin`,
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const { accessToken, ...user } = result.data.data;

                    successNotify(result.data.message);

                    // setting logged data to redux state
                    dispatch(userLoggedIn({
                        accessToken: result.data.data.accessToken,
                        user: user,
                    }));

                    // setting cookies
                    Cookies.set('accessToken', result.data.data.accessToken, { expires: arg.rememberMe ? 30 : 1 });
                    Cookies.set('user', JSON.stringify(user), { expires: arg.rememberMe ? 30 : 1 });

                } catch (error) {
                    errorNotify(error?.error?.data?.message)
                }
            }
        }),
    })
});

export const {
    useLoginMutation,
} = authApi;