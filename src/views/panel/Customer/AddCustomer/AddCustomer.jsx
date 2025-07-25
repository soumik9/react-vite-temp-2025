import { PrimaryButton } from '@src/components';
import { Input } from '@src/components/Froms';
import { CardLayout } from '@src/components/Layout';
import { errorNotify, successNotify } from '@src/libs/hooks';
import { useCreateCustomerMutation } from '@src/redux-rtk';
import React from 'react';

const AddCustomer = () => {

    const [createCustomer, { isLoading }] = useCreateCustomerMutation();

    const handleAddCustomer = (e) => {
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
        createCustomer(formData).unwrap()
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
        <CardLayout isNotInitalized>
            <form action="" onSubmit={handleAddCustomer} className='grid md:grid-cols-2 gap-y-4 md:gap-x-6'>

                <Input
                    label="Name"
                    id="name"
                />

                <Input
                    label="Phone"
                    id="phone"
                />

                <Input
                    label="Address"
                    id="address"
                    divCss="md:col-span-2"
                />

                <div className='flex justify-end md:col-span-2'>
                    <PrimaryButton
                        text="Add Customer"
                        css="md:!w-[200px] mt-8"
                        isLoading={isLoading}
                    />
                </div>

            </form>
        </CardLayout>
    );
};

export default AddCustomer;