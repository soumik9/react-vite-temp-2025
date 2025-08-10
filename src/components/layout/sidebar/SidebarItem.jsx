import React from 'react';
import { Link } from 'react-router';
import { cn } from '@src/libs/helper';
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
                    'text-base flex items-center gap-x-2 cursor-pointer p-4 text-light-gray rounded-lg font-semibold text-lg',
                    activePath === menu.activePath ? 'bg-primary ' : 'hover:bg-blueNight font-normal'
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