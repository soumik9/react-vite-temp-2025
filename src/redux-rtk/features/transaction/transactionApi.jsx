import { apiSlice } from "../api/apiSlice";
import { ENUM_TAG_TYPES } from "../api/tagTypes";

// ?the main api url
const URL = 'transaction'

export const transactionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *get transaction by customer 
        getTransactionsByCustomer: builder.query({
            query: (customerId) => `${URL}/customer/all/${customerId}`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.TRANSACTIONS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *add cash to customer account endpoint here
        addCashToCustomerAccount: builder.mutation({
            query: ({ customerId, data }) => ({
                url: `${URL}/customer/add-cash/${customerId}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.CUSTOMERS, ENUM_TAG_TYPES.DASHBOARD, ENUM_TAG_TYPES.TRANSACTIONS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    // toast.error(error.error.data.message);
                }
            }
        }),

        // *return cash to customer account endpoint here
        returnCashToCustomerAccount: builder.mutation({
            query: ({ customerId, data }) => ({
                url: `${URL}/customer/return-cash/${customerId}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.CUSTOMERS, ENUM_TAG_TYPES.DASHBOARD, ENUM_TAG_TYPES.TRANSACTIONS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    // toast.error(error.error.data.message);
                }
            }
        }),
    })
});

export const {
    useGetTransactionsByCustomerQuery,
    useAddCashToCustomerAccountMutation,
    useReturnCashToCustomerAccountMutation
} = transactionApi;