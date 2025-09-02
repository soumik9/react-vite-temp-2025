import { Fragment } from 'react';
import { Link } from 'react-router';
import { cn } from '@src/libs/helper';
import { useSelector } from 'react-redux';
import ToggleSidebar from './ToggleSidebar';
import { FaAngleRight } from "react-icons/fa6";
import ProfileDropdown from './ProfileDropdown';

const Header = ({ links }) => {

    const { isDark } = useSelector((state) => state.global);

    return (
        <div className={cn(
            isDark ? "bg-blueNight border-b" : "bg-slate-300",
            "py-5 w-full flex justify-between items-center px-2 md:px-8 select-none",
        )}>
            <div className='flex justify-between items-center w-full gap-x-4'>

                <div className='flex items-center gap-x-4'>
                    {/* Toggle Sidebar Button */}
                    <ToggleSidebar />

                    {/* large screen navigation */}
                    <ul className='hidden lg:flex lg:items-center lg:gap-x-1.5'>
                        {links.map((link, index) => (
                            <Fragment key={index}>
                                <li className={cn(
                                    'text-xl',
                                    index === links.length - 1
                                        ? (isDark ? "text-gray-600" : "text-gray-600")
                                        : (isDark ? "text-gray-300 group-hover:text-gray-200" : "text-secondary group-hover:text-gray-900")
                                )}>
                                    {index < links.length - 1 ? (
                                        <Link to={link?.path}>
                                            {link?.title}
                                        </Link>
                                    ) : (
                                        <span className='cursor-default'>
                                            {link?.title}
                                        </span>
                                    )}
                                </li>
                                {(index < links.length - 1) && (
                                    <li>
                                        <FaAngleRight className="w-4 h-4 text-gray-500" />
                                    </li>
                                )}
                            </Fragment>
                        ))}
                    </ul>
                </div>

                {/* Profile Dropdown */}
                <ProfileDropdown />
            </div>
        </div>
    );
};

export default Header;