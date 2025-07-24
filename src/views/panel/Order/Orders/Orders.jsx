import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import DataTableWrapper from '@/components/Layout/DataTableWrapper/DataTableWrapper';
import React, { useEffect, useRef, useState } from 'react';
import { useGetOrdersQuery } from '@/redux-rtk/features/order/orderApi';
import OrdersTable from './OrdersTable';
import Input from '@/components/Froms/Input';
import moment from 'moment';
import { getStringTimestamp } from '@/utils/hooks/helper';

const Orders = () => {

    // *ref variables
    const componentRef = useRef(null);
    const [searchText, setSeachText] = useState('');
    const [date, setDate] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // *redux api call to get all users
    const { data: orders, isLoading, isError } = useGetOrdersQuery();

    // *set filtered data
    useEffect(() => {
        if (searchText && date) {
            const unixConvoert = moment(date).unix();
            const formattedDate = getStringTimestamp(unixConvoert);

            const getDataWhichMatchedByDate = orders?.data?.filter(order => {
                const orderDate = getStringTimestamp(order.date);
                return orderDate === formattedDate;
            });

            const filtered = getDataWhichMatchedByDate.filter(order =>
                order.orderId.toLowerCase().includes(searchText.toLowerCase()) ||
                order.reference?.name.toLowerCase().includes(searchText.toLowerCase()) ||
                order.customer?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        } else if (searchText) {
            const filtered = orders?.data.filter(order =>
                order.orderId.toLowerCase().includes(searchText.toLowerCase()) ||
                order.reference?.name.toLowerCase().includes(searchText.toLowerCase()) ||
                order.customer?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        } else if (date) {
            const unixConvoert = moment(date).unix();
            const formattedDate = getStringTimestamp(unixConvoert);
            const filtered = orders?.data?.filter(order => {
                const orderDate = getStringTimestamp(order.date);
                return orderDate === formattedDate;
            });
            setFilteredData(filtered);
        } else {
            setFilteredData(orders?.data);
        }
    }, [orders?.data, searchText, date]);

    return (
        <CardLayout isNotInitalized title={'Orders'} searchBar={
            <div className='flex gap-x-4'>

                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    divCss="w-[360px]"
                />

                <Input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSeachText(e.target.value)}
                    placeholder="Search... name/phone"
                    divCss="w-[360px]"
                />
            </div>
        }>
            <DataTableWrapper componentRef={componentRef}>
                <OrdersTable
                    datas={filteredData}
                    isLoading={isLoading}
                />
            </DataTableWrapper>
        </CardLayout>
    );
};

export default Orders;