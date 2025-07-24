import { cx, getStringTimestamp } from '@/utils/hooks/helper';
import React from 'react';
import { useSelector } from 'react-redux';

const InvoiceDetails = ({ order = {}, customer, reference }) => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    return (
        <div className={cx(
            isDark ? 'text-white' : 'text-lightDark',
        )}>
            <div className="grid md:grid-cols-2 items-center md:gap-y-0 gap-y-5">
                <div className='flex gap-2.5 items-center'>
                    <img src="/logo-main.png" alt="company-logo" height="100" width="100" />
                    <div>
                        <h2 className='text-2xl font-semibold mb-1'>Tamim Enterprise</h2>
                        <p className='font-medium'>Tiles and Ceramics</p>
                    </div>
                </div>
                <div className="text-right text-sm">
                    <p className='text-base uppercase'>Tamim Enterprise</p>
                    <p className="">Tiles and Ceramics</p>
                    <p className="mt-1">DubolHati Road, Hat Naogaon, Naogaon</p>
                    <p className=" mt-1">+8801753389555</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 items-center mt-8 md:gap-y-0 gap-y-5">
                <div className=''>
                    <p className="font-bold ">Bill to :</p>
                    <p className="">
                        {customer?.name}<br />
                        {customer?.address}
                    </p>
                    <p className="">{customer?.phone}</p>
                </div>

                {Object.keys(order).length > 0 && (
                    <div className="text-right">
                        <p className='flex gap-1 justify-end'>
                            <span className='font-medium'>Invoice number:</span>
                            <span>{order?.orderId}</span>
                        </p>
                        <p className='flex gap-1 justify-end'>
                            <span className='font-medium'>Invoice date:</span>
                            <span>{getStringTimestamp(order?.date)}</span><br />
                        </p>
                        <p className='flex gap-1 justify-end'>
                            <span className='font-medium'>Reference:</span>
                            <span>{reference?.name ? reference?.name : 'N/A'}</span>
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default InvoiceDetails;