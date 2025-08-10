import { Sidebar } from './sidebar';
import { Outlet } from 'react-router';
import { cn } from '@src/libs/helper';
import { setMobileMenuOpen } from '@src/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DashboardLayout = () => {

    const dispatch = useDispatch();
    const { mobileMenuOpen } = useSelector((state) => state.global);

    // states 
    const [open, setOpen] = useState(true);

    // Add event listener for window resize
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1024);
            dispatch(setMobileMenuOpen(window.innerWidth > 768 && false));
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex'>

            <Sidebar open={open} />

            <main className={cn('flex flex-col flex-1 h-screen overflow-hidden')}>
                <Outlet />
            </main>

            {/* Mobile Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10"
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                />
            )}

        </div>
    );
};

export default DashboardLayout;