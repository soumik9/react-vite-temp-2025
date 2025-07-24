import { cx, getStringTimestamp } from '@/utils/hooks/helper';
import React from 'react';
import DataTable from 'react-data-table-component';
import OActionBtn from './OActionBtn';
import { useUpdateOrderStatusMutation } from '@/redux-rtk/features/order/orderApi';
import { errorNotify, successNotify } from '@/utils/hooks/notify';

const OrdersTable = ({ datas, isLoading }) => {

    const [updateOrderStatus, { isLoading: updateStatusLoading }] = useUpdateOrderStatusMutation();

    const handleChange = (orderId, status) => {

        const formData = new FormData();
        formData.append("data", JSON.stringify({ status }));

        // rtk query called
        updateOrderStatus({ orderId, formData }).unwrap()
            .then(response => {
                if (response.success) {
                    successNotify(response.message);
                }
            })
            .catch(error => {
                errorNotify(error?.data?.message);
            });
    };

    // *users data column
    const columns = [
        {
            name: 'Order Id',
            selector: (row) => row.orderId,
            sortable: true,
        },
        {
            name: 'Customer Name',
            selector: (row) => row.customer?.name,
            width: '180px'
        },
        {
            name: 'Reference',
            selector: (row) => <>{row.reference?.name ? row.reference?.name : 'N/A'}</>,
            width: '150px'
        },
        {
            name: 'Date',
            selector: (row) => getStringTimestamp(row.date),
        },
        {
            name: 'Total',
            selector: (row) => <>{row.total} BDT</>,
        },
        {
            name: 'Cash',
            selector: (row) => <>{row.credit} BDT</>,
        },
        {
            name: 'Due',
            selector: (row) => <div>
                <span className='text-error'>{row.total - row.credit}</span>  BDT
            </div>,
        },
        {
            name: 'Status',
            selector: (row) => {
                return (
                    <button
                        type='role'
                        onClick={() => handleChange(row._id, !row.status)}
                        className={cx(
                            row.status ? 'bg-success hover:bg-success' : 'bg-error hover:bg-error',
                            "text-white py-1 px-2 rounded-md"
                        )}
                    >
                        {row.status ? 'Deliverd' : 'Pending'}
                    </button>
                );
            },
        },
        {
            name: 'Action',
            cell: (row) => <OActionBtn
                _id={row._id}
            // deleteEmployee={deleteEmployee}
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
                progressPending={isLoading || updateStatusLoading}
            />
        </div>
    );
};

export default OrdersTable;