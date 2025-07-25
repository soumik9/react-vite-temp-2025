import React from 'react'
import { useSelector } from 'react-redux';
import { cn } from '@src/libs/hooks';
import { MenuItem } from '../partials';
import { useLocation } from 'react-router';
import { dashboardMenuItems } from '@src/libs/constant/constant';

const DashboardSidebar = ({ open, setOpen }) => {

    // *global
    const location = useLocation();
    const global = useSelector((state) => state.global);

    return (
        <div className={cn(
            open ? 'xll:w-72 w-60' : 'w-20',
            global.isDark ? 'bg-lightDark' : 'bg-primary',
            'h-screen relative duration-300 pb-5'
        )}>

            <div className={cn(
                'py-[1.12rem] flex gap-x-4 items-center border-b px-5',
                open ? 'xll:py-[1.12rem] py-[1.30rem]' : 'xll:py-[0.62em] py-[0.80rem]'
            )}>
                <img width={40} height={40} src="/logo-main.png" alt="dashboard logo" className={cn(
                    'cursor-pointer duration-500 xll:w-10 xll:h-10 w-8 h-8',
                    open && 'rotate-[360deg]'
                )} />
                <h1 className={cn(
                    global.isDark ? 'text-gray-300' : 'text-white',
                    'origin-left font-medium xll:text-xl duration-300 cursor-default',
                    !open && 'scale-0'
                )}>Tamim Enterprise</h1>
            </div>

            <ul className='pt-6 flex flex-col gap-y-2 px-5'>
                {dashboardMenuItems.map((menu, index) => (
                    <MenuItem
                        key={menu.to}
                        index={index}
                        menu={menu}
                        open={open}
                        isActive={
                            menu.activeLinks.includes(location.pathname)
                        }
                    />
                ))}
            </ul>
        </div>
    )
}

export default DashboardSidebar