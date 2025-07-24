import { useEffect, useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar';
import { cx } from '@/utils/hooks/helper';
import { useSelector } from 'react-redux';

const DashboardLayout = ({ children }) => {

    // *global
    const global = useSelector((state) => state.global);

    // *states 
    const [open, setOpen] = useState(true);

    // *Add event listener for window resize
    useEffect(() => {
        const handleResize = () => setOpen(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener('resize', handleResize);

        // *Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex overflow-hidden'>
            <DashboardSidebar
                open={open}
                setOpen={setOpen}
            />

            <main className={cx(
                global.isDark ? 'bg-blueNight' : 'bg-gray-100',
                'flex flex-col flex-1 h-screen overflow-hidden'
            )}>

                <DashboardHeader
                    open={open}
                    setOpen={setOpen}
                />

                <div className='overflow-y-auto scrollbar'>
                    <div className='mx-8 my-6'>
                        {children}
                    </div>
                </div>

            </main>
        </div>
    )
}

export default DashboardLayout