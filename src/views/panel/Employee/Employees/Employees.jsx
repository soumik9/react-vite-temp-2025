import { useGetEmployeesQuery } from '@/redux-rtk/features/employee/employeeApi';
import React, { useEffect, useRef, useState } from 'react';
import EmployeeTable from './EmployeeTable';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import DataTableWrapper from '@/components/Layout/DataTableWrapper/DataTableWrapper';
import Input from '@/components/Froms/Input';

const Employees = () => {

    // *ref & state variables
    const componentRef = useRef(null);
    const [searchText, setSeachText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // *redux api call to get all users
    const { data: employees, isLoading, isError } = useGetEmployeesQuery();

    // *set filtered data
    useEffect(() => {
        if (searchText) {
            const filtered = employees?.data.filter(employee =>
                employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
                employee.phone.toLowerCase().includes(searchText.toLowerCase()) ||
                employee.address.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(employees?.data);
        }
    }, [employees?.data, searchText]);


    return (
        <CardLayout isNotInitalized title={'Employees'} searchBar={
            <div className='w-full md:max-w-[360px]'>
                <Input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSeachText(e.target.value)}
                    placeholder="Search... name/phone"
                />
            </div>
        }>
            <DataTableWrapper componentRef={componentRef}>
                <EmployeeTable
                    datas={filteredData}
                    isLoading={isLoading}
                />
            </DataTableWrapper>
        </CardLayout>
    );
};

export default Employees;