import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import React from 'react';

const UserDetails = ({ isSelected, title, user, isEmployee }) => {
    return (
        <CardLayout isNotInitalized>
            {isSelected ? (
                <>
                    <h4 className='text-xl text-lightDark font-medium'>{title}</h4>
                    <div class="divider"></div>

                    <div className='flex flex-col gap-y-2 text-lightDark'>
                        <div className='flex '>
                            <p className='w-1/4'>Name</p>
                            <p className='flex-1'>: {user.name}</p>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4'>Phone</p>
                            <p className='flex-1'>: {user.phone}</p>
                        </div>
                        <div className='flex'>
                            <p className='w-1/4'>Address</p>
                            <p className='flex-1'>: {user.address}</p>
                        </div>
                    </div></>
            ) : (
                <p className='text-red-500 h-[164px] flex justify-center items-center'>
                    Please select {isEmployee ? 'employee' : 'customer'}
                </p>
            )}
        </CardLayout>
    );
};

export default UserDetails;