import React from 'react';
import { cn } from '@src/libs/helper';
import SidebarItem from './SidebarItem';
import { setMobileMenuOpen } from '@src/redux';
import { sidebarNavData } from '@src/libs/data';
import { useDispatch, useSelector } from 'react-redux';
import { imageStaticPath } from '@src/assets';
import { FaXmark } from "react-icons/fa6";

const Sidebar = ({ open }) => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { mobileMenuOpen } = useSelector((state) => state.global);

    return (
        <>
            {/* Sidebar for large screens */}
            <div
                className={cn(
                    'h-screen relative duration-300 px-5 bg-main-black hidden lg:flex flex-col lg:w-[280px] overflow-y-auto message-scrollbar bg-lightDark border-r border-livid',
                )}
                style={{
                    // boxShadow: "0 2px 15px rgb(0 0 0 / 0.7)",
                }}
            >
                <div className={cn('pt-4 flex items-center justify-center')}>
                    <img src={imageStaticPath.logo} alt="logo" className='max-h-16 w-28' />
                </div>

                <ul className='flex flex-col gap-y-2 flex-grow list-none mt-6'>
                    {sidebarNavData.slice(0, -1).map((menu, index) => (
                        <SidebarItem
                            key={`sidebar-item-${index}`}
                            index={index}
                            menu={menu}
                            open={open}
                        />
                    ))}
                </ul>

                <ul className="mt-auto list-none mb-6">
                    <SidebarItem
                        menu={sidebarNavData[sidebarNavData.length - 1]}
                        open={open}
                    />
                </ul>
            </div>

            {/* Sidebar for mobile screens */}
            <div
                className={cn(
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
                    'fixed top-0 left-0 h-screen w-[252px] bg-main-black z-20 transition-transform duration-300 px-4 lg:hidden flex flex-col overflow-y-auto message-scrollbar bg-lightDark'
                )}
                style={{
                    boxShadow: "2px 0 15px rgb(0 0 0 / 0.85)",
                }}
            >
                <button className='outline-none absolute right-4 top-4' onClick={() => dispatch(setMobileMenuOpen(false))}>
                    <FaXmark className='text-light-gray' size={20} />
                </button>

                <div className={cn('pt-10')}>
                    <img src={imageStaticPath.logo} alt="logo" className='max-h-16 w-28' />
                </div>

                <ul className='flex flex-col gap-y-2 flex-grow list-none mt-8'>
                    {sidebarNavData.slice(0, -1).map((menu, index) => (
                        <SidebarItem
                            key={`sidebar-Mobitem-${index}`}
                            index={index}
                            menu={menu}
                            open={open}
                        />
                    ))}
                </ul>

                <ul className="list-none mb-4 mt-auto">
                    <SidebarItem
                        menu={sidebarNavData[sidebarNavData.length - 1]}
                        open={open}
                    />
                </ul>
            </div>
        </>
    );
};

export default Sidebar;