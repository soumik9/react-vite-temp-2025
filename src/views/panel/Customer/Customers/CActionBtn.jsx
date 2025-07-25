import { ActionButton, ActionLink } from '@src/components/Layout';
import { ENUM_ACTION_TITLE } from '@src/libs/enum/enum';
import { CUSTOMER_LINKS } from '@src/libs/enum/link';
import { useDelete } from '@src/libs/hooks';
import React from 'react'

const CActionBtn = ({ _id, deleteCustomer }) => {

    // *delete request hook
    const { sendDeleteRequest } = useDelete();

    // *funtion to delete a user
    const handleDeleteCustoomer = (customerId) => {
        sendDeleteRequest(customerId, deleteCustomer);
    }

    return (
        <div className='flex gap-[7px]'>
            <ActionLink
                href={`${CUSTOMER_LINKS.ACCOUNT_CUSTOMER_SUB}/${_id}`}
                type={ENUM_ACTION_TITLE.ACCOUNT}
            />

            <ActionLink
                href={`${CUSTOMER_LINKS.VIEW_CUSTOMER_SUB}/${_id}`}
                type={ENUM_ACTION_TITLE.VIEW}
            />

            <ActionLink
                href={`${CUSTOMER_LINKS.UPDATE_CUSTOMER_SUB}/${_id}`}
                type={ENUM_ACTION_TITLE.UPDATE}
            />

            <ActionButton
                itype={ENUM_ACTION_TITLE.DELETE}
                onClick={() => handleDeleteCustoomer(_id)}
            />
        </div>
    )
}

export default CActionBtn