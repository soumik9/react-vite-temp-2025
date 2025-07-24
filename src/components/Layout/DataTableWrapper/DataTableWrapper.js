import { cx } from '@/utils/hooks/helper';
import React from 'react'
import { useSelector } from 'react-redux';

const DataTableWrapper = ({ componentRef, children }) => {

    // *global
    const global = useSelector((state) => state.global);

    return (
        <div className={cx(
            global.isDark ? 'darkTable' : 'lightTable',
            'users_datatable cursor-default'
        )} ref={componentRef}>
            {children}
        </div>
    )
}

export default DataTableWrapper