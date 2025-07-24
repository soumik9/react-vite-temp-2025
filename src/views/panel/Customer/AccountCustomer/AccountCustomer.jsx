import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import InvoiceDetails from '@/components/Print/InvoiceDetails';
import InvoiceThanks from '@/components/Print/InvoiceThanks';
import PrintTableHead from '@/components/Print/partials/PrintTableHead';
import { useGetTransactionsByCustomerQuery } from '@/redux-rtk/features/transaction/transactionApi';
import { sliceOptions, statementTableColums } from '@/utils/constant/data';
import React, { useEffect, useRef, useState } from 'react';
import AccountTable from './AccountTable';
import SelectCustom from '@/components/Froms/SelectCustom';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { useReactToPrint } from 'react-to-print';
import AddCash from './AddCash';
import { useGetCustomerQuery } from '@/redux-rtk/features/customer/customerApi';
import ReturnCash from './ReturnCash';

const AccountCustomer = ({ customerId }) => {

    // *redux api call to get all users
    const { data: customer, isLoading, isError, isSuccess } = useGetCustomerQuery(customerId);
    const { data: transactions, isLoading: transLoading, isError: transErr, isSuccess: transSuccess } = useGetTransactionsByCustomerQuery(customerId);

    // *states
    const componentRef = useRef();
    const [slice, setSlice] = useState(sliceOptions[0])
    const [filterData, setFilterData] = useState([])

    // *set filtered data
    useEffect(() => {
        if (slice) {
            setFilterData(transactions?.data.slice(0, slice?.value))
        } else {
            setFilterData(transactions?.data)
        }
    }, [transactions?.data, slice])

    // Handler for printing
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <CardLayout isLoading={isLoading || transLoading} isError={isError || transErr} isSuccess={isSuccess || transSuccess} title="Customer" searchBar={
            <>
                <SelectCustom
                    options={sliceOptions}
                    value={slice}
                    onChange={setSlice}
                    divCss="w-[100px]"
                />
            </>
        }>

            <PrimaryButton
                onClick={handlePrint}
                text="Print"
                css="absolute top-[45%] right-4 !w-[130px]"
            />

            {/* add cash */}
            <AddCash
                customer={customer?.data?.customer}
            />

            {/* return cash */}
            <ReturnCash
                customer={customer?.data?.customer}
            />

            (<div className='p-4' ref={componentRef}>

                <InvoiceDetails customer={customer?.data?.customer} />

                {transactions?.data.length === 0 ? <div className='text-center text-red-500'>There is no transactions</div> : (
                    <table className="items-center bg-transparent w-full border-collapse mt-8">
                        <PrintTableHead
                            columns={statementTableColums}
                        />
                        <AccountTable
                            transactions={filterData || []}
                        />
                    </table>
                )}


                <InvoiceThanks />
            </div>)


        </CardLayout>
    );
};

export default AccountCustomer;