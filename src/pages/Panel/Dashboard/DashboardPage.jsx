import { LayoutHelper } from '@src/components';
import { DashboardPathEnum } from '@src/libs/enum';
import React from 'react';

const DashboardPage = () => {
    return (
        <LayoutHelper links={[DashboardPathEnum]}>
        </LayoutHelper>
    );
};

export default DashboardPage;