import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import DataTableWrapper from '@/components/Layout/DataTableWrapper/DataTableWrapper';
import { useGetCustomerQuery } from '@/redux-rtk/features/customer/customerApi';
import { cx } from '@/utils/hooks/helper';
import React, { useRef } from 'react';
import OrdersTable from '../../Order/Orders/OrdersTable';

const ViewCustomer = ({ customerId }) => {

    // *ref variables
    const componentRef = useRef(null);

    // *redux api call to get all users
    const { data: customer, isLoading, isError, isSuccess } = useGetCustomerQuery(customerId);

    return (
        <>
            <CardLayout isLoading={isLoading} isError={isError} isSuccess={isSuccess} title={customer?.data?.name}>
                <div className='flex flex-col gap-y-2 text-lightDark'>
                    <div className='flex '>
                        <p className='w-1/4'>Name</p>
                        <p className='flex-1'>: {customer?.data?.customer?.name}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Phone</p>
                        <p className='flex-1'>: {customer?.data?.customer?.phone}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Address</p>
                        <p className='flex-1'>: {customer?.data?.customer?.address}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Account</p>
                        <p className='flex-1'>: {customer?.data?.customer?.account?._id}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Balance</p>
                        <p className={cx(
                            'flex-1 font-bold',
                            customer?.data?.customer?.account?.balance < 0 ? 'text-red-500' : 'text-green-500'
                        )}>
                            <span className='text-lightDark font-normal'>:</span>
                            {" "}{customer?.data?.customer?.account?.balance}
                        </p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Total Orders</p>
                        <p className='flex-1 font-bold text-green-500'>
                            <span className='text-lightDark font-normal'>:</span>
                            {" "}{customer?.data?.orders?.length}
                        </p>
                    </div>
                </div>
            </CardLayout>

            {/* orders data */}
            <CardLayout isNotInitalized title={'Orders'}>
                <DataTableWrapper componentRef={componentRef}>
                    <OrdersTable
                        datas={customer?.data?.orders}
                        isLoading={isLoading}
                    />
                </DataTableWrapper>
            </CardLayout>
        </>
    );
};

export default ViewCustomer;