import React from 'react'
import DashboardLayout from './DashboardLayout/DashboardLayout';
import NotifyContainer from '@/utils/hooks/notify';
import useAuthCheck from '@/utils/hooks/useAuthCheck';

const AppComponent = ({ pageProps, Component, dashboard }) => {

    // authentication checking
    const authChecked = useAuthCheck();
    if (!authChecked) return <div className='text-center'>Checking authentication....</div>

    if (dashboard) {
        return <DashboardLayout>
            <NotifyContainer />
            <Component {...pageProps} />
        </DashboardLayout>
    } else {
        return <>
            <NotifyContainer />
            <Component {...pageProps} />
        </>
    }
}

export default AppComponent