import PrimaryButton from '@/components/Button/PrimaryButton';
import SecondaryButton from '@/components/Button/SecondaryButton';
import Input from '@/components/Froms/Input';
import Modal from '@/components/Modal/Modal';
import { useReturnCashToCustomerAccountMutation } from '@/redux-rtk/features/transaction/transactionApi';
import { errorNotify, successNotify } from '@/utils/hooks/notify';
import React, { useState } from 'react';

const ReturnCash = ({ customer }) => {

    const [cash, setCash] = useState();

    const [returnCashToCustomerAccount, { isLoading }] = useReturnCashToCustomerAccountMutation();

    const handleReturnCash = (e) => {

        const data = { return: Number(cash) }

        if (!data.return)
            return errorNotify('Cash amount required');

        if (data.return < 1)
            return errorNotify('Cash amount must be greater than 0!');


        const formData = new FormData();
        formData.append("data", JSON.stringify(data));


        // rtk query called
        returnCashToCustomerAccount({ customerId: customer?._id, data: formData }).unwrap()
            .then(response => {
                if (response.success) {
                    successNotify(response.message);
                    document.getElementById('returnCashModal').close();
                }
            })
            .catch(error => {
                errorNotify(error?.data?.message);
            });
    }

    return (
        <>

            <SecondaryButton
                text="Return Cash"
                css="absolute top-[63%] right-4 !w-[130px] text-sm"
                onClick={() => document.getElementById('returnCashModal').showModal()}
            />

            <Modal id="returnCashModal" title={`Return Cash - (${customer?.name})`}>
                <Input
                    label="Return Cash Amount"
                    id="credit"
                    type='number'
                    value={cash}
                    min={0}
                    onChange={(e) => setCash(e.target.value)}
                />

                <div className='flex justify-end md:col-span-2'>
                    <PrimaryButton
                        text="Return Cash"
                        css="md:!w-[150px] mt-8"
                        onClick={handleReturnCash}
                        isLoading={isLoading}
                    />
                </div>
            </Modal>

        </>
    );
};

export default ReturnCash;