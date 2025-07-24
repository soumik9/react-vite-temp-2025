import { cx } from '@/utils/hooks/helper';
import React from 'react';
import { useSelector } from 'react-redux';

const PrintTableHead = ({ columns }) => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    return (
        <thead>
            <tr className={cx(
                isDark ? 'text-white' : 'text-lightDark',
                "font-semibold  uppercase text-xs"
            )}>
                {columns.map((col, index) => (
                    <th key={index} className={`px-6 border border-stone-200 py-2 whitespace-nowrap ${col.className}`}>
                        {col.name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default PrintTableHead;