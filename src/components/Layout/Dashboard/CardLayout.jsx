import React from 'react'
import { useSelector } from 'react-redux';
import { EmptyData, Loading } from '.';
import { cn } from '@src/libs/hooks';

const commonCls = 'mt-8 cardLayout py-6 px-5'
const commonTitleCls = 'text-[22px] font-medium font-secondary'
const commonSearchBarCls = 'flex flex-col md:flex-row md:justify-between md:items-center'

const CardLayout = ({ children, title, isLoading, isError, isSuccess, isNotInitalized, searchBar }) => {

    // *global
    const global = useSelector((state) => state.global);

    // *error and loading
    if (isLoading) return <Loading height />
    if (!isLoading && isError) return <EmptyData height='h-[62vh]' errorMsg />

    if (isSuccess && !isLoading && !isError) return (
        <div className={cn(
            global.isDark ? 'bg-lightDark' : 'bg-white',
            commonCls,
        )}>

            {title && (<div className={cn(
                searchBar ? commonSearchBarCls : '',
                'border-b border-gray-300 mb-8 pb-3'
            )}>
                <h1 className={cn(
                    global.isDark ? 'text-secondary-200' : 'text-gray-600 ',
                    commonTitleCls
                )}>
                    {title}
                </h1>

                {searchBar}
            </div>)}

            {children}
        </div>
    )

    if (isNotInitalized) return <div className={cn(
        global.isDark ? 'bg-lightDark' : 'bg-white',
        commonCls,
    )}>

        {title && (<div className={cn(
            searchBar ? commonSearchBarCls : '',
            'border-b border-gray-300 mb-8 pb-3'
        )}>
            <h1 className={cn(
                global.isDark ? 'text-secondary-200' : 'text-gray-600 ',
                commonTitleCls
            )}>
                {title}
            </h1>

            {searchBar}
        </div>)}

        {children}
    </div>

    return <></>
}

export default CardLayout