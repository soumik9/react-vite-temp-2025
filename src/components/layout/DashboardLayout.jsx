import { Sidebar } from './sidebar';
import { Outlet } from 'react-router';
import { cn } from '@src/libs/helper';

const DashboardLayout = () => {
    return (
        <div className='flex'>

            <Sidebar />

            <main className={cn(
                'flex flex-col flex-1 h-screen overflow-hidden'
            )}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;