import PrimaryButton from '@/components/Button/PrimaryButton';
import Input from '@/components/Froms/Input';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { useCreateEmployeeMutation } from '@/redux-rtk/features/employee/employeeApi';
import { errorNotify, successNotify } from '@/utils/hooks/notify';
import React from 'react';

const AddEmployee = () => {

    const [createEmployee, { isLoading }] = useCreateEmployeeMutation();

    const handleAddEmployee = (e) => {
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
        createEmployee(formData).unwrap()
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
            <form action="" onSubmit={handleAddEmployee} className='grid md:grid-cols-2 gap-y-4 md:gap-x-6'>

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
                        text="Add Employee"
                        css="md:!w-[200px] mt-8"
                        isLoading={isLoading}
                    />
                </div>

            </form>
        </CardLayout>
    );
};

export default AddEmployee;