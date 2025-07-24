import ActionButton from '@/components/Layout/Dashboard/ActionButton'
import ActionLink from '@/components/Layout/Dashboard/ActionLink'
import { ENUM_ACTION_TITLE } from '@/utils/enum/enum'
import { CUSTOMER_LINKS, USER_LINKS } from '@/utils/enum/link'
import useDelete from '@/utils/hooks/useDelete'
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