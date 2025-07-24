import { apiSlice } from "../api/apiSlice";
import { ENUM_TAG_TYPES } from "../api/tagTypes";

// ?the main api url
const URL = 'order'

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *create order endpoint here
        createOrder: builder.mutation({
            query: (data) => ({
                url: `${URL}/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.ORDERS, ENUM_TAG_TYPES.CUSTOMERS, ENUM_TAG_TYPES.DASHBOARD, ENUM_TAG_TYPES.TRANSACTIONS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    // toast.error(error.error.data.message);
                }
            }
        }),

        // *get all orders 
        getOrders: builder.query({
            query: () => `${URL}/all`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.ORDERS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *get a single order by id endpoint here
        getOrder: builder.query({
            query: (orderId) => `${URL}/single/${orderId}`,
            providesTags: (result, error, arg) => [{
                type: ENUM_TAG_TYPES.ORDER, id: arg
            }],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *updating order status data by order id
        updateOrderStatus: builder.mutation({
            query: ({ orderId, formData }) => ({
                url: `${URL}/update/status/${orderId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: (result, error, arg) => [
                ENUM_TAG_TYPES.ORDERS,
                ENUM_TAG_TYPES.DASHBOARD,
                { type: ENUM_TAG_TYPES.ORDER, id: arg.orderId }
            ],
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
    useCreateOrderMutation,
    useGetOrdersQuery,
    useGetOrderQuery,
    useUpdateOrderStatusMutation
} = orderApi;