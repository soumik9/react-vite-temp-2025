import React from 'react';
import { Link } from 'react-router';
import { cn } from '@src/libs/helper';
import { imageStaticPath } from '@src/assets';
import { setMobileMenuOpen } from '@src/redux';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignJustify, FaAngleRight } from "react-icons/fa6";

const Header = ({ links }) => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    return (
        <div className='bg-lightDark py-3 px-4 lg:px-8 border-b border-main-200 lg:max-h-[102px] shadow-b-lg'>
            <div className='flex justify-between items-center'>

                {/* large screen navigation */}
                <ul className='hidden lg:flex lg:items-center lg:gap-x-1.5'>
                    {links.map((link, index) => (
                        <React.Fragment key={index}>
                            <li className={cn(
                                'text-xl ',
                                (index < links.length - 1) ? 'font-normal text-light-gray hover:text-silver' : 'font-bold text-white'
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
                                    <FaAngleRight className="w-4 h-4 text-silver" />
                                </li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>

                {/* Menu Button for Mobile */}
                <button className='block lg:hidden bg-primary text-white hover:bg-secondary' onClick={() => dispatch(setMobileMenuOpen(true))}>
                    <FaAlignJustify className='w-5 h-5' />
                </button>

                <div className='flex items-center gap-x-2 md:gap-x-4 group hover:opacity-80 trans' >
                    <div className='border border-platinum rounded-full w-10 h-10 md:w-12 md:h-12 flex_center shrink-0'>
                        <img
                            src={user?.image || imageStaticPath.logo}
                            alt={user?.fullName || "User Avatar"}
                            className='rounded-full h-full w-full object-cover'
                        />
                    </div>

                    <div className=''>
                        <h6 className='text-white text-base lg:text-lg leading-[110%] font-bold'>
                            {user?.fullName || "Soumik Ahammed"}
                        </h6>
                        <p className='font-medium text-sm text-livid'>
                            {/* {formatStatusStr(user?.role)} */}
                            Admin
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;