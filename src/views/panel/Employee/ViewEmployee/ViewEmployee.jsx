import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { useGetEmployeeQuery } from '@/redux-rtk/features/employee/employeeApi';
import React, { useRef } from 'react';
import OrdersTable from '../../Order/Orders/OrdersTable';
import DataTableWrapper from '@/components/Layout/DataTableWrapper/DataTableWrapper';

const ViewEmployee = ({ employeeId }) => {

    // *ref variables
    const componentRef = useRef(null);

    // *redux api call to get all users
    const { data: employee, isLoading, isError, isSuccess } = useGetEmployeeQuery(employeeId);

    return (
        <>
            <CardLayout isLoading={isLoading} isError={isError} isSuccess={isSuccess} title={employee?.data?.name}>
                <div className='flex flex-col gap-y-2 text-lightDark'>
                    <div className='flex '>
                        <p className='w-1/4'>Name</p>
                        <p className='flex-1'>: {employee?.data?.employee?.name}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Phone</p>
                        <p className='flex-1'>: {employee?.data?.employee?.phone}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Address</p>
                        <p className='flex-1'>: {employee?.data?.employee?.address}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/4'>Total Orders</p>
                        <p className='flex-1 font-bold text-green-500'>
                            <span className='text-lightDark font-normal'>:</span>
                            {" "}{employee?.data?.orders?.length}
                        </p>
                    </div>
                </div>
            </CardLayout>

            {/* orders data */}
            <CardLayout isNotInitalized title={'Orders'}>
                <DataTableWrapper componentRef={componentRef}>
                    <OrdersTable
                        datas={employee?.data?.orders}
                        isLoading={isLoading}
                    />
                </DataTableWrapper>
            </CardLayout>
        </>
    );
};

export default ViewEmployee;