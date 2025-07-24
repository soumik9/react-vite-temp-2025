import { apiSlice } from "../api/apiSlice";
import { ENUM_TAG_TYPES } from "../api/tagTypes";

// ?the main api url
const URL = 'employee'

export const employeeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *create employee endpoint here
        createEmployee: builder.mutation({
            query: (data) => ({
                url: `${URL}/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.EMPLOYEES, ENUM_TAG_TYPES.DASHBOARD,],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    // toast.error(error.error.data.message);
                }
            }
        }),

        // *get all employees 
        getEmployees: builder.query({
            query: () => `${URL}/all`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.EMPLOYEES],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *get a single employee by id endpoint here
        getEmployee: builder.query({
            query: (employeeId) => `${URL}/single/${employeeId}`,
            providesTags: (result, error, arg) => [{
                type: ENUM_TAG_TYPES.EMPLOYEE, id: arg
            }],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *updating employee data by user id
        updateEmployee: builder.mutation({
            query: ({ employeeId, formData }) => ({
                url: `${URL}/update/${employeeId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: (result, error, arg) => [
                ENUM_TAG_TYPES.EMPLOYEES,
                { type: ENUM_TAG_TYPES.EMPLOYEE, id: arg.employeeId }
            ],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    // toast.error(error.error.data.message);
                }
            }
        }),

        // *deleting employee data by user id
        deleteEmployee: builder.mutation({
            query: (employeeId) => ({
                url: `${URL}/delete/${employeeId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [ENUM_TAG_TYPES.EMPLOYEES, ENUM_TAG_TYPES.DASHBOARD],
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
    useCreateEmployeeMutation,
    useGetEmployeesQuery,
    useGetEmployeeQuery,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation
} = employeeApi;