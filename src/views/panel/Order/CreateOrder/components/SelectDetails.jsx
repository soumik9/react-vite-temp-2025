import Input from '@/components/Froms/Input';
import SelectCustom from '@/components/Froms/SelectCustom';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { useGetCustomersQuery } from '@/redux-rtk/features/customer/customerApi';
import { useGetEmployeesQuery } from '@/redux-rtk/features/employee/employeeApi';
import React from 'react';

const SelectDetails = ({
    selectedCustomer, setSelectedCustomer, selectedEmployee, setSelectedEmployee, selectedDate, setSelectedDate, credit, setCredit,
    labourCharge, setLabourCharge, discountOnTotal, setDiscountOnTotal
}) => {

    const { data: employees, isLoading: employeeLoading, isSuccess: employeeSuccess, isError: employeeError } = useGetEmployeesQuery();
    const { data: customers, isLoading: customerLoading, isSuccess: customerSuccess, isError: customerError } = useGetCustomersQuery();

    const employeeOptions = employees?.data?.map(employee => ({
        _id: employee._id,
        label: employee.name,
        value: employee._id
    }));

    const customerOptions = customers?.data?.map(customer => ({
        _id: customer._id,
        label: customer.name,
        value: customer._id
    }));

    return (
        <CardLayout
            isLoading={employeeLoading || customerLoading}
            isError={employeeError || customerError}
            isSuccess={employeeSuccess || customerSuccess}
        >
            <div className='grid md:grid-cols-3 gap-x-6 gap-y-3'>
                <SelectCustom
                    label="Select Customer"
                    options={customerOptions}
                    value={selectedCustomer}
                    onChange={setSelectedCustomer}
                    isSearchable
                />

                <SelectCustom
                    label="Select Reference"
                    options={employeeOptions}
                    value={selectedEmployee}
                    onChange={setSelectedEmployee}
                    isSearchable
                />

                <Input
                    label="Date"
                    id="date"
                    type='date'
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />

                <Input
                    label="Credit"
                    id="credit"
                    type='number'
                    value={credit}
                    min={0}
                    onChange={(e) => setCredit(e.target.value)}
                />

                <Input
                    label="Labour Charge"
                    id="labourCharge"
                    type='number'
                    value={labourCharge}
                    min={0}
                    onChange={(e) => setLabourCharge(e.target.value)}
                />

                <Input
                    label="Discount On Total"
                    id="discountOnTotal"
                    type='number'
                    value={discountOnTotal}
                    min={0}
                    onChange={(e) => setDiscountOnTotal(e.target.value)}
                />
            </div>
        </CardLayout>
    );
};

export default SelectDetails;