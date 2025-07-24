import React from 'react';
import UserDetails from '../partials/UserDetails';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';

const ViewSelected = ({ selectedCustomer, selectedEmployee, customers, employees, date }) => {
    return (
        <div className='flex w-full gap-x-6'>

            <div className='w-1/3'>
                <UserDetails
                    isSelected={selectedCustomer.value}
                    title="Customer Details"
                    user={customers?.find((customer) => customer._id === selectedCustomer.value)}
                />
            </div>

            <div className='w-1/3'>
                <UserDetails
                    isSelected={selectedEmployee.value}
                    title="Reference Details"
                    user={employees?.find((employee) => employee._id === selectedEmployee.value)}
                    isEmployee
                />
            </div>

            <div className='w-1/3'>
                <CardLayout isNotInitalized>
                    {date ? (
                        <div className='flex flex-col gap-y-2 '>
                            <h4 className='text-xl text-lightDark font-medium'>Date</h4>
                            <div class="divider"></div>

                            <p className='text-red-500 h-[73px] flex justify-center items-center'>
                                {date}
                            </p>
                        </div>
                    ) : (
                        <p className='text-red-500 h-[164px] flex justify-center items-center'>
                            Please select date
                        </p>
                    )}
                </CardLayout>
            </div>
        </div>
    );
};

export default ViewSelected;