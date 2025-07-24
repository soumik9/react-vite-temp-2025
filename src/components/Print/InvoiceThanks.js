import { cx } from '@/utils/hooks/helper';
import React from 'react';
import { useSelector } from 'react-redux';

const InvoiceThanks = () => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    return (
        <div className={cx(
            isDark ? "text-white" : "text-lightDark",
            "border-t-2 border-stone-200 pt-4 text-xs text-center mt-12 flex flex-col justify-center gap-y-1"
        )}>
            <p>Thank you for choosing Tamim Enterprise products. We believe you will be satisfied by our service</p>
            <p>Software developed by Team kalaTabij. Phone: +8801689201370</p>
            <p>https://soumikahammed.com</p>
        </div>
    );
};

export default InvoiceThanks;