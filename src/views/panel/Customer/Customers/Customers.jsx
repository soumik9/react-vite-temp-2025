import React, { useEffect, useRef, useState } from 'react';
import CustomersTable from './CustomersTable';
import { useGetCustomersQuery } from '@src/redux-rtk';
import { CardLayout, DataTableWrapper } from '@src/components/Layout';
import PrimaryButton from '@src/components/Button/PrimaryButton';
import { Input } from '@src/components/Froms';
import { useReactToPrint } from 'react-to-print';

const Customers = () => {

    // *ref & state variables
    const componentRef = useRef(null);
    const [searchText, setSeachText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // *redux api call to get all users
    const { data: customers, isLoading, isError } = useGetCustomersQuery();

    // *set filtered data
    useEffect(() => {
        if (searchText) {
            const filtered = customers?.data.filter(customer =>
                customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
                customer.phone.toLowerCase().includes(searchText.toLowerCase()) ||
                customer.address.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(customers?.data);
        }
    }, [customers?.data, searchText]);

    // Handler for printing
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    // console.log(componentRef)

    const isPrintDisabled = isLoading || filteredData?.length === 0;

    return (
        <CardLayout
            isNotInitalized
            title={'Customers'}
            searchBar={
                <div className='flex flex-col md:flex-row gap-2 items-center'>
                    <PrimaryButton
                        onClick={handlePrint}
                        text="Print"
                        css="!w-[120px] !h-[43px] relative top-[3px] cursor-pointer"
                        disabled={isPrintDisabled}
                    />

                    <div className=''>
                        <Input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSeachText(e.target.value)}
                            placeholder="Search... name/phone/location"
                            divCss='md:!w-[360px] w-full'
                        />
                    </div>
                </div>
            }
        >
            <DataTableWrapper ref={componentRef}>
                <CustomersTable
                    datas={filteredData}
                    isLoading={isLoading}
                />
            </DataTableWrapper>
        </CardLayout>
    );
};

export default Customers;