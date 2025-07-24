import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { cx } from "@/utils/hooks/helper";

const BreadNavItem = ({ links, item, index, isDark }) => {
    return (
        <>
            <li className="" key={index}>
                <Link
                    href={item.url}
                    className={cx(
                        'flex items-center gap-1 trans lg:text-base text-sm',

                        (isDark && item.isActive) && '!text-livid hover:!text-secondary font-medium',
                        (isDark && !item.isActive) && "!text-gray-300 hover:!text-white",

                        (!isDark && item.isActive) && '!text-light-gray hover:!text-warning-hover font-medium',
                        (!isDark && !item.isActive) && "hover:!text-gray-300 text-silver",
                    )}
                >
                    {index === 0 ?
                        <AiOutlineHome className='lg:text-[18px] text-base relative  top-[-1px]' /> : null}
                    {item.text}
                </Link>
            </li>

            {index < links.length - 1 && <li className="cursor-default text-white relative  top-[-1px]">/</li>}
        </>
    )
}

export default BreadNavItem