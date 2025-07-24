import { cx } from '@/utils/hooks/helper';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const MenuItem = ({ menu, open, isActive }) => {

    // *destructing menu item
    const { to, text, icon } = menu;

    // *global
    const global = useSelector((state) => state.global);

    return (
        <li>
            <Link
                href={to}
                className={cx(
                    global.isDark ? 'text-gray-300' : 'text-white',
                    'font-medium text-base flex items-center gap-x-3.5 cursor-pointer px-2.5 py-3 hover:bg-livid trans rounded-md',
                    isActive && global.isDark ? 'bg-blueNight' : '',
                    isActive && !global.isDark ? 'bg-secondary' : '',
                    !open && 'w-max'
                )}
            >
                <span className='w-6'>{icon}</span>
                <span className={cx(
                    !open && 'hidden',
                    'origin-left duration-200 relative top-[-1px] tracking-wide'
                )}>
                    {text}
                </span>
            </Link>
        </li>
    )
}

export default MenuItem