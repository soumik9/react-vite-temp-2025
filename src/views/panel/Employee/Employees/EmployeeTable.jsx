import React from 'react';
import DataTable from 'react-data-table-component';
import EActionBtn from './EActionBtn';
import { useDeleteEmployeeMutation } from '@/redux-rtk/features/employee/employeeApi';

const EmployeeTable = ({ datas, isLoading }) => {

    // *delete rtk hook
    const [deleteEmployee, { isLoading: deleteLoading }] = useDeleteEmployeeMutation();

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
            name: 'Action',
            cell: (row) => <EActionBtn
                _id={row._id}
                deleteEmployee={deleteEmployee}
            />,
            width: '175px'
        },
    ];

    return (
        <div>
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

export default EmployeeTable;