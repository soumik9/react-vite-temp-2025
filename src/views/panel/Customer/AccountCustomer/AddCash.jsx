import PrimaryButton from '@/components/Button/PrimaryButton';
import SecondaryButton from '@/components/Button/SecondaryButton';
import Input from '@/components/Froms/Input';
import Modal from '@/components/Modal/Modal';
import { useAddCashToCustomerAccountMutation } from '@/redux-rtk/features/transaction/transactionApi';
import { errorNotify, successNotify } from '@/utils/hooks/notify';
import React, { useState } from 'react';

const AddCash = ({ customer }) => {

    const [cash, setCash] = useState();

    const [addCashToCustomerAccount, { isLoading }] = useAddCashToCustomerAccountMutation();

    const handleAddCash = (e) => {

        const data = { credit: Number(cash) }

        if (!data.credit)
            return errorNotify('Cash amount required');

        if (data.credit < 1)
            return errorNotify('Cash amount must be greater than 0!');


        const formData = new FormData();
        formData.append("data", JSON.stringify(data));


        // rtk query called
        addCashToCustomerAccount({ customerId: customer?._id, data: formData }).unwrap()
            .then(response => {
                if (response.success) {
                    successNotify(response.message);
                    document.getElementById('addCashModal').close();
                }
            })
            .catch(error => {
                errorNotify(error?.data?.message);
            });
    }

    return (
        <>

            <SecondaryButton
                text="Add Cash"
                css="absolute top-[54%] right-4 !w-[130px]"
                onClick={() => document.getElementById('addCashModal').showModal()}
            />

            <Modal id="addCashModal" title={`Add Cash - (${customer?.name})`}>
                <Input
                    label="Add Cash Amount"
                    id="credit"
                    type='number'
                    value={cash}
                    min={0}
                    onChange={(e) => setCash(e.target.value)}
                />

                <div className='flex justify-end md:col-span-2'>
                    <PrimaryButton
                        text="Add Cash"
                        css="md:!w-[150px] mt-8"
                        onClick={handleAddCash}
                        isLoading={isLoading}
                    />
                </div>
            </Modal>

        </>
    );
};

export default AddCash;