import { Breadcrumb } from '@src/components';
import { CUSTOMER_LINKS } from '@src/libs/enum/link';
import { Customers } from '@src/views/panel';
import React from 'react';

const CustomerPage = () => {
    return (
        <>
            <Breadcrumb
                title='Customers'
                getLinks={[
                    { url: CUSTOMER_LINKS.CUSTOMER, text: 'Customers', isActive: true }
                ]}
                nextPageText='Add Customer'
                nextPageLink={CUSTOMER_LINKS.ADD_CUSTOMER}
            />
            <Customers />
        </>
    );
};

export default CustomerPage;