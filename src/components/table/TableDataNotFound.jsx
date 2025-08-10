import { imageStaticPath } from '@src/assets';
import React from 'react';

const TableDataNotFound = ({ title, description }) => {
    return (
        <div className='f-center flex-col my-10 lg:my-0 lg:h-full min-h-[300px]'>
            <img src={imageStaticPath.error404} alt="not found" />

            <h2 className='mt-6 mb-4 text-text-700 text-2xl font-semibold leading-[110%]'>
                {title}
            </h2>

            <p className='text-text-600 max-w-[850px] text-center text-sm lg:text-base'>
                {description}
            </p>
        </div>
    );
};

export default TableDataNotFound;