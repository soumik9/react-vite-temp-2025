import ActionButton from '@/components/Layout/Dashboard/ActionButton'
import ActionLink from '@/components/Layout/Dashboard/ActionLink'
import { ENUM_ACTION_TITLE } from '@/utils/enum/enum'
import { EMPLOYEE_LINKS, ORDER_LINKS } from '@/utils/enum/link'
import useDelete from '@/utils/hooks/useDelete'
import React from 'react'

const OActionBtn = ({ _id }) => {

    // *delete request hook
    const { sendDeleteRequest } = useDelete();

    // *funtion to delete a user
    // const handleDeleteEmployee = (employeeId) => {
    //     sendDeleteRequest(employeeId, deleteEmployee);
    // }

    return (
        <div className='flex gap-[7px]'>
            <ActionLink
                href={`${ORDER_LINKS.VIEW_ORDER_SUB}/${_id}`}
                type={ENUM_ACTION_TITLE.VIEW}
            />

            <ActionButton
                itype={ENUM_ACTION_TITLE.DELETE}
            // onClick={() => handleDeleteEmployee(_id)}
            />
        </div>
    )
}

export default OActionBtn