import { Breadcrumb } from '@src/components';
import { CUSTOMER_LINKS } from '@src/libs/enum/link';
import { AddCustomer } from '@src/views/panel';
import React from 'react';

const AddCustomerPage = () => {
    return (
        <>
            <Breadcrumb
                title='Add Customer'
                getLinks={[
                    { url: CUSTOMER_LINKS.CUSTOMER, text: 'Customers', isActive: false },
                    { url: CUSTOMER_LINKS.ADD_CUSTOMER, text: 'Add Customer', isActive: true }
                ]}
            />
            <AddCustomer />
        </>
    );
};

export default AddCustomerPage;