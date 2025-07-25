import React from 'react';
import { Dashboard } from '@src/views/panel';
import { Breadcrumb } from '@src/components';

const DashboardPage = () => {
    return (
        <>
            <Breadcrumb />
            <Dashboard />
        </>
    );
};

export default DashboardPage;