import React from 'react';
import { Header } from './header';
import { cn } from '@src/libs/helper';
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router';
import { Footer } from './footer';

const LayoutHelper = ({ children, links, mobileHandler }) => {
    return (
        <>
            <Header links={links} />

            <div className='overflow-y-auto text-text-600 h-full flex flex-col'>
                <div className='m-4 md:m-8 mb-6 lg:mb-10 flex-grow'>

                    {/* mobile navigation */}
                    <ul className='mb-6 gap-x-1 lg:hidden flex items-center'>
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                <li
                                    className={cn(
                                        'text-xs',
                                        (index < links.length - 1) ? 'font-normal text-text-600' : 'font-bold text-text-700'
                                    )}
                                >
                                    {index < links.length - 1 ? (
                                        <Link
                                            to={link?.path}
                                            onClick={() => {
                                                if (mobileHandler)
                                                    mobileHandler();
                                            }}>
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
                                        <FaAngleRight className='w-4 h-4' />
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>

                    {children}
                </div>

                <Footer />
            </div>
        </>
    );
};

export default LayoutHelper;