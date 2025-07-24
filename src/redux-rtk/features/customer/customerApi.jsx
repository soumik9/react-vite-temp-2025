import { apiSlice } from "../api/apiSlice";
import { ENUM_TAG_TYPES } from "../api/tagTypes";

// ?the main api url
const URL = 'customer'

export const customerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *create customer endpoint here
        createCustomer: builder.mutation({
            query: (data) => ({
                url: `${URL}/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.CUSTOMERS, ENUM_TAG_TYPES.DASHBOARD,],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    // toast.error(error.error.data.message);
                }
            }
        }),

        // *get all customer 
        getCustomers: builder.query({
            query: () => `${URL}/all`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.CUSTOMERS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *get a single customer by id endpoint here
        getCustomer: builder.query({
            query: (customerId) => `${URL}/single/${customerId}`,
            providesTags: (result, error, arg) => [{
                type: ENUM_TAG_TYPES.CUSTOMER, id: arg
            }],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *updating customer data by user id
        updateCustomer: builder.mutation({
            query: ({ customerId, formData }) => ({
                url: `${URL}/update/${customerId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: (result, error, arg) => [
                ENUM_TAG_TYPES.CUSTOMERS,
                { type: ENUM_TAG_TYPES.CUSTOMER, id: arg.customerId }
            ],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    // toast.error(error.error.data.message);
                }
            }
        }),

        // *deleting customer data by user id
        deleteCustomer: builder.mutation({
            query: (customerId) => ({
                url: `${URL}/delete/${customerId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [ENUM_TAG_TYPES.CUSTOMERS, ENUM_TAG_TYPES.DASHBOARD,],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
    useCreateCustomerMutation,
    useDeleteCustomerMutation,
    useGetCustomersQuery,
    useGetCustomerQuery,
    useUpdateCustomerMutation,
} = customerApi;