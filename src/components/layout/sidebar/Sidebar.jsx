import React from 'react';
import { cn } from '@src/libs/helper';
import SidebarItem from './SidebarItem';
import { useSelector } from 'react-redux';
import { imageStaticPath } from '@src/assets';
import { brandName, sidebarNavData } from '@src/libs/data';

const Sidebar = () => {

    const { isDark, isSidebarOpen } = useSelector((state) => state.global);

    return (
        <>
            {/* Sidebar for large screens */}
            <div
                className={cn(
                    isSidebarOpen ? 'xll:w-72 w-60' : 'w-20',
                    isDark ? 'bg-lightDark' : 'bg-primary',
                    'h-screen relative duration-300 pb-5 flex flex-col'
                )}
            >

                <div className={cn(
                    'py-[1.12rem] flex gap-x-4 items-center border-b px-5',
                    isSidebarOpen ? 'xl:py-[1.18rem] py-[1.30rem]' : 'xll:py-[0.62em] py-[0.80rem]'
                )}>
                    <img src={imageStaticPath.logo} alt="dashboard logo" className={cn(
                        'cursor-pointer duration-500 xll:w-10 xll:h-10 w-8 h-8',
                        isSidebarOpen && 'rotate-[360deg]'
                    )} />
                    <h1 className={cn(
                        isDark ? 'text-gray-300' : 'text-white',
                        'origin-left font-medium xll:text-xl duration-300 cursor-default',
                        !isSidebarOpen && 'scale-0'
                    )}>
                        {brandName}
                    </h1>
                </div>

                <ul className='flex flex-col gap-y-2 flex-grow list-none mt-6 px-5'>
                    {sidebarNavData.slice(0, -1).map((menu, index) => (
                        <SidebarItem
                            key={`sidebar-item-${index}`}
                            index={index}
                            menu={menu}
                            open={isSidebarOpen}
                        />
                    ))}
                </ul>

                <ul className="mt-auto list-none mb-0 px-5">
                    <SidebarItem
                        menu={sidebarNavData[sidebarNavData.length - 1]}
                        open={isSidebarOpen}
                    />
                </ul>
            </div>
        </>
    );
};

export default Sidebar;