import React from 'react';
import CActionBtn from './CActionBtn';
import DataTable from 'react-data-table-component';
import { useDeleteCustomerMutation } from '@src/redux-rtk';
import { cn } from '@src/libs/hooks';

const CustomersTable = ({ datas, isLoading }) => {

    // *delete rtk hook
    const [deleteCustomer, { isLoading: deleteLoading }] = useDeleteCustomerMutation();

    // *users data column
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: (row) => row.phone,
        },
        {
            name: 'Address',
            selector: (row) => row.address,
        },
        {
            name: 'Account',
            selector: (row) => row.account._id,
            width: '205px'
        },
        {
            name: 'Balance',
            selector: (row) => {
                const balance = row?.account?.balance || 0; // Default to 0 if balance is undefined
                const displayBalance = balance < 0 ? Math.abs(balance) : -balance;
                return (
                    <span className={cn(
                        balance < 0 ? 'text-red-500' : 'text-green-500',
                        'font-semibold'
                    )}>
                        {displayBalance}
                    </span>
                );
            },
            center: true
        },
        {
            name: 'Action',
            cell: (row) => <CActionBtn
                _id={row._id}
                deleteCustomer={deleteCustomer}
            />,
            width: '175px'
        },
    ];

    return (
        <div className='p-4'>
            <DataTable
                columns={columns}
                data={datas}
                highlightOnHover
                pagination={datas?.length > 10}
                persistTableHead={true}
                paginationPerPage={10}
                progressPending={isLoading || deleteLoading}
            />
        </div>
    );
};

export default CustomersTable;