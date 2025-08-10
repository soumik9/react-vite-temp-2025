import React from 'react';
import { cn } from '@src/libs/helper';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetActivePath } from '@src/libs/hooks';
import { setActivePath, setMobileMenuOpen } from '@src/redux';

const SidebarItem = ({ menu }) => {

    const dispatch = useDispatch();
    const { activePath, subActivePath, isDropdownOpen } = useGetActivePath();

    return (
        <li>
            <Link
                to={menu.to}
                className={cn(
                    'text-base flex items-center gap-x-2 cursor-pointer p-4 text-white ',
                    activePath === menu.activePath ? 'bg-main-500 rounded-[8px] font-semibold' : 'bg-main-black hover:opacity-80 font-normal trans'
                )}
                onClick={() => {
                    dispatch(setActivePath(menu.activePath));
                    setTimeout(() => {
                        dispatch(setMobileMenuOpen(false));
                    }, 400);
                }}
            >
                {menu.icon}
                {menu.text}
            </Link>
        </li>
    );
};

export default SidebarItem;