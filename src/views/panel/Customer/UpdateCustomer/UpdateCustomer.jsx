import PrimaryButton from '@/components/Button/PrimaryButton';
import Input from '@/components/Froms/Input';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { useGetCustomerQuery, useUpdateCustomerMutation } from '@/redux-rtk/features/customer/customerApi';
import { errorNotify, successNotify } from '@/utils/hooks/notify';
import React from 'react';

const UpdateCustomer = ({ customerId }) => {

    // *redux api call to get all users
    const { data: customer, isLoading, isError, isSuccess } = useGetCustomerQuery(customerId);
    const [updateCustomer, { isLoading: updateLoading }] = useUpdateCustomerMutation();

    const handleUpdateCustomer = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
        }

        if (!data.name || !data.phone || !data.address)
            return errorNotify('Fields are requried');

        // Validate phone number
        const phonePattern = /^\d{11}$/;
        if (!phonePattern.test(data.phone))
            return errorNotify('Phone number must be 11 digits');

        const formData = new FormData();
        formData.append("data", JSON.stringify(data));

        // rtk query called
        updateCustomer({ customerId, formData }).unwrap()
            .then(response => {
                if (response.success) {
                    successNotify(response.message);
                    form.reset();
                }
            })
            .catch(error => {
                errorNotify(error?.data?.message);
            });
    }

    return (
        <CardLayout isLoading={isLoading} isError={isError} isSuccess={isSuccess}>
            <form action="" onSubmit={handleUpdateCustomer} className='grid md:grid-cols-2 gap-y-4 md:gap-x-6'>

                <Input
                    label="Name"
                    id="name"
                    defaultValue={customer?.data?.name}
                />

                <Input
                    label="Phone"
                    id="phone"
                    defaultValue={customer?.data?.phone}
                    disabled
                />

                <Input
                    label="Address"
                    id="address"
                    divCss="md:col-span-2"
                    defaultValue={customer?.data?.address}
                />

                <div className='flex justify-end md:col-span-2'>
                    <PrimaryButton
                        text="Update Customer"
                        css="md:!w-[200px] mt-8"
                        isLoading={updateLoading}
                        loadingText=''
                    />
                </div>

            </form>
        </CardLayout>
    );
};

export default UpdateCustomer;