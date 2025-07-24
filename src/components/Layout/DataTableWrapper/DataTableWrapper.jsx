import React from 'react'
import { cn } from '@src/libs/hooks';
import { useSelector } from 'react-redux';

const DataTableWrapper = ({ componentRef, children }) => {

    // *global
    const global = useSelector((state) => state.global);

    return (
        <div className={cn(
            global.isDark ? 'darkTable' : 'lightTable',
            'users_datatable cursor-default'
        )} ref={componentRef}>
            {children}
        </div>
    )
}

export default DataTableWrapper